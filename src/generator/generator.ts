import { createHash } from "crypto";
import { DartAnalyzer } from "../dart-base/analyzer";
import { DartModelPrinter } from "../dart-base/dart-model-printer";
import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartConstructorSpec,
  DartDefKind,
  DartField,
  DartFieldOrParam,
  DartFunction,
  DartFunctionParam,
  DartType,
} from "../dart-base/parser";
import { recase, TextCase } from "../utils";
import { GenerationOptions } from "./generator-config";

export let question = "?";
export let req = "required";

// TODO: make it scoped
export const setNullSafety = (params: { enabled: boolean }): void => {
  if (params.enabled) {
    question = "?";
    req = "required";
  } else {
    question = "/*?*/";
    req = "@required";
  }
};

const defaultGenerationOptions: GenerationOptions = {
  fromJson: {},
  toJson: {},
  equality: {},
  copyWith: {},
  toStringOverride: {},
  allFieldsGetter: {},
  allFieldsEnum: {},
  builder: {},
};

interface GenerateAnalyzerParams {
  analyzer: DartAnalyzer;
  outputFile: string;
}

export interface ClassGeneratorComment {
  generator?: string;
  jsonKeyCase?: TextCase;
  md5Hash?: string;
}

export class ClassGenerator {
  options: GenerationOptions;
  params?: GenerateAnalyzerParams;
  commentData?: ClassGeneratorComment;

  constructor(
    opts: GenerationOptions | undefined,
    params?: GenerateAnalyzerParams,
    commentData?: ClassGeneratorComment
  ) {
    this.params = params;
    this.commentData = commentData;
    this.options = {
      ...(!opts || Object.keys(opts).length === 0
        ? defaultGenerationOptions
        : opts),
    };
    if (commentData?.jsonKeyCase) {
      this.options.baseClass = {
        ...(this.options.baseClass ?? {}),
        jsonKeyCase: commentData?.jsonKeyCase,
      };
    }
  }

  generate = (
    dartClass: DartClass
  ): { content: string; md5Hash: string; imports: Array<string> } => {
    const options = this.options;
    const defaultConstructor =
      dartClass.defaultConstructor ?? makeConstructorFromFields(dartClass);

    const output = `\
  ${options.fromJson ? this.generateFromJson(defaultConstructor) : ""}\
  ${options.toJson ? this.generateToJson(dartClass.fieldsNotStatic) : ""}\
  ${
    options.copyWith ? this.generateCopyWith(dartClass, defaultConstructor) : ""
  }\
  ${options.equality ? this.generateEquality(dartClass) : ""}\
  ${options.toStringOverride ? this.generateToString(dartClass) : ""}\
  ${
    options.allFieldsGetter
      ? this.generateAllFieldsGetter(dartClass.fieldsNotStatic)
      : ""
  }\
}

${options.allFieldsEnum ? this.generateAllFieldsEnum(dartClass) : ""}\
${options.builder ? this.generateBuilder(dartClass, defaultConstructor) : ""}\
`;
    const md5Hash = createHash("md5").update(output).digest("base64");
    const data = JSON.stringify({
      ...Object.fromEntries(
        Object.entries(this.commentData ?? {}).filter(
          ([_, v]) => v !== undefined && v !== null
        )
      ),
      md5Hash,
    } as ClassGeneratorComment);

    const generatedConstructor = dartClass.defaultConstructor
      ? ""
      : `\n${new DartModelPrinter().printConstructor(defaultConstructor)}\n`;
    const content = `
${generatedConstructor}\
// generated-dart-fixer-start${data}
${output}
// generated-dart-fixer-end${data}
`;
    const imports = [
      options.equality?.customImport,
      options.observable?.customImport,
    ]
      .filter((v) => typeof v === "string")
      .sort() as Array<string>;

    return { content, md5Hash, imports };
  };

  generateFromJson = (dartConstructor: DartConstructorSpec): string => {
    const options = this.options;
    const name = options.fromJson?.constructorName ?? "fromJson";
    const parameterType = options.fromJson?.parameterType ?? "Map";
    const isMap =
      parameterType === "Map" || parameterType.trim().startsWith("Map<");
    const factoryName = `${dartConstructor.dartType.name}.${name}`;
    return `
${options.fromJson?.metadata ?? ""}\
factory ${factoryName}(${parameterType}${isMap ? " " : " _"}json) {
${isMap ? "" : "  final json = _json as Map;\n"}\
  return ${instantiateConstructor(
    dartConstructor,
    dartConstructor.params.map((p) => ({
      name: p.name,
      value: this.fromJsonValue({ param: p }),
    }))
  )};
}
`;
  };

  // TODO: use information from other type.
  // Enums don't use Map as argument to fromJson and primitive type definitions do not have a fromJson
  fromJsonValue = (
    options:
      | {
          param?: null;
          dartType: DartType | undefined;
          getter: string;
        }
      | {
          param: DartConstructorParam;
          getter?: null;
          dartType?: null;
        }
  ): string => {
    const jsonKeyCase = this.options.baseClass?.jsonKeyCase;
    const param = options.param;
    const getter =
      options.getter ??
      `json["${jsonKeyCase ? recase(param!.name, jsonKeyCase) : param!.name}"]`;
    const pType = param?.type ?? "dynamic";
    const dartType = options.dartType ?? new DartType(pType);
    if (dartType.text === "dynamic" || dartType.text === `Object${question}`) {
      return getter;
    }
    const nullableCast = dartType.isNullable
      ? `${getter} == null ? null : `
      : "";
    if (dartType.isMap) {
      return `${nullableCast}(${getter} as Map).map((k, v) => MapEntry(${this.fromJsonValue(
        {
          dartType: dartType.generics[0],
          getter: "k",
        }
      )},${this.fromJsonValue({
        dartType: dartType.generics[1],
        getter: "v",
      })}))`;
    } else if (dartType.isList || dartType.isSet) {
      return `${nullableCast}(${getter} as Iterable).map((v) => ${this.fromJsonValue(
        {
          dartType: dartType.generics[0],
          getter: "v",
        }
      )}).to${dartType.name}()`;
    } else if (dartType.isDateTime) {
      return `${nullableCast}DateTime.parse(${getter} as String)`;
    } else if (dartType.isDuration) {
      return `${nullableCast}Duration(microseconds: ${getter} as int)`;
    } else if (dartType.isBigInt) {
      return `${nullableCast}BigInt.parse(${getter} as String)`;
    } else if (dartType.isUri) {
      return `${nullableCast}Uri.parse(${getter} as String)`;
    } else if (dartType.isPrimitive || dartType.text === "Object") {
      return `${getter} as ${dartType.text}`;
    }

    let argType: string | null = null;
    if (this.params?.analyzer) {
      const typeDef = this.params.analyzer.resolveType({
        file: this.params.outputFile,
        dartType,
      });
      if (typeDef && typeDef.kind === DartDefKind.alias) {
        return this.fromJsonValue({
          dartType: new DartType(typeDef.type),
          getter: getter,
        });
      } else if (typeDef) {
        const functionName = "fromJson";
        const fromJsonStatic = typeDef.methods.find(
          (m) => m.name === functionName && m.isStatic && m.params.length === 1
        );
        if (fromJsonStatic) {
          argType = fromJsonStatic.params[0].type;
        } else if (typeDef.kind !== DartDefKind.mixin) {
          const fromJsonFactory = typeDef.constructors.find(
            (m) => m.name === functionName && m.params.length === 1
          );
          if (fromJsonFactory) {
            argType = fromJsonFactory.params[0].type;
          }
        }
        if (!argType && typeDef.kind === DartDefKind.enum) {
          return `${nullableCast}${dartType.text.replace(
            "?",
            ""
          )}.values.byName(${getter} as String)`;
        }
      }
    }
    // TODO: when should we use ${nullableCast}? could it be configurable?
    if (argType && new DartType(argType).name === "Map") {
      return `${nullableCast}${dartType.name}.fromJson((${getter} as Map).cast())`;
    }
    // TODO: enum
    // TODO:  return `${dartType.name}.fromJson((${getter} as Map).cast())`;
    return `${nullableCast}${dartType.name}.fromJson(${getter} as ${
      argType ?? "dynamic"
    })`;
  };

  generateToJson = (fieldsNotStatic: Array<DartField>): string => {
    const keyCase = this.options.baseClass?.jsonKeyCase;
    return `
${this.options.toJson?.metadata ?? ""}\
Map<String, Object${question}> toJson() {
  return {
    ${fieldsNotStatic
      .map(
        (p) =>
          `"${keyCase ? recase(p.name, keyCase) : p.name}": ${this.toJsonValue({
            name: p.name,
            dartType: p.type ? new DartType(p.type) : undefined,
          })},`
      )
      .join("\n    ")}
  };  
}
`;
  };

  private toJsonValue = (f: {
    name: string;
    dartType: DartType | undefined;
  }): string => {
    const dartType = f.dartType;
    if (!dartType || dartType.isJson) {
      return f.name;
    }
    const questionMark = dartType.isNullable ? question : "";
    const getter = `${f.name}${questionMark}`;
    if (dartType.isMap) {
      return `${getter}.map((k, v) => MapEntry(k.toString(), ${this.toJsonValue(
        {
          dartType: dartType.generics[1],
          name: "v",
        }
      )}))`;
    } else if (dartType.isList || dartType.isSet) {
      return `${getter}.map((v) => ${this.toJsonValue({
        dartType: dartType.generics[0],
        name: "v",
      })}).toList()`;
    } else if (dartType.isDateTime) {
      return `${getter}.toIso8601String()`;
    } else if (dartType.isDuration) {
      return `${getter}.inMicroseconds`;
    } else if (dartType.isBigInt) {
      return `${getter}.toString()`;
    } else if (dartType.isUri) {
      return `${getter}.toString()`;
    }
    if (this.options.toJson?.nested) {
      return `${f.name}.toJson()`;
    }
    return f.name;
  };

  generateCopyWith = (
    dartClass: DartClass,
    dartConstructor: DartConstructorSpec
  ): string => {
    return `
${this.options.copyWith?.metadata ?? ""}\
${dartClass.name} copyWith({
  ${dartConstructor.params
    .map(
      (p) =>
        `${nullableType(p.type)} ${p.name},${
          p.type?.trim().endsWith("?") ? ` bool ${p.name}ToNull = false,` : ""
        }`
    )
    .join("\n  ")}
}) {
  return ${instantiateConstructor(
    dartConstructor,
    dartConstructor.params.map((p) => ({
      name: p.name,
      value: `${p.name} ?? ${
        p.type?.trim()?.endsWith("?")
          ? `(${p.name}ToNull ? null : this.${p.name})`
          : `this.${p.name}`
      }`,
    })),
    {
      delimiter: "  ",
    }
  )};
}
`;
  };

  generateEquality = (dartClass: DartClass): string => {
    const options = this.options.equality;
    const equalsMethod =
      options?.equalsMethod ??
      (options?.deep ? "const DeepCollectionEquality().equals" : undefined);
    const hashMethod =
      options?.hashMethod ??
      (options?.deep ? "const DeepCollectionEquality().hash" : undefined);
    // TODO: hashAll with props as param
    return `
@override
bool operator ==(Object other) {
  return identical(other, this) || other is ${
    dartClass.name
  } && other.runtimeType == runtimeType
  ${dartClass.fieldsNotStatic
    .map((p) =>
      equalsMethod
        ? ` && ${equalsMethod}(other.${p.name}, ${p.name})`
        : ` && other.${p.name} == ${p.name}`
    )
    .join("")};
}

@override
int get hashCode {
  return Object.hashAll([
    runtimeType,
    ${dartClass.fieldsNotStatic
      .map((p) => (hashMethod ? `${hashMethod}(${p.name}),` : `${p.name},`))
      .join("\n    ")}
  ]);
}
`;
  };

  generateToString = (dartClass: DartClass): string => {
    // TODO: use toJson()
    return `
${this.options.toStringOverride?.metadata ?? ""}\
@override
String toString() {
  return "${dartClass.name}\${{${dartClass.fieldsNotStatic
      .map((p) => `"${p.name}":${p.name},`)
      .join("")}}}";
}
`;
  };

  generateAllFieldsGetter = (fieldsNotStatic: Array<DartField>): string => {
    const name = this.options.allFieldsGetter?.name ?? "props";
    return `
${this.options.allFieldsGetter?.metadata ?? ""}\
List<Object${question}> get ${name} => [
  ${fieldsNotStatic.map((p) => `${p.name},`).join("\n  ")}
];
`;
  };

  generateAllFieldsEnum = (dartClass: DartClass): string => {
    const className = dartClass.name;
    const nameTemplate =
      this.options.allFieldsEnum?.nameTemplate ?? "{{name}}Field";
    const enumName = nameTemplate.replace(/{{name}}/g, className);

    return `
${this.options.allFieldsEnum?.metadata ?? ""}\
enum ${enumName} {
  ${dartClass.fieldsNotStatic
    .map(
      (p) =>
        `${p.name}("${
          p.type ?? ""
        }", isFinal: ${p.isFinal.toString()}, isVariable: ${p.isVariable.toString()}, defaultValue: ${
          p.defaultValue?.toString() ?? "null"
        },)`
    )
    .join(",\n  ")};

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object${question} defaultValue;

  bool get isNullable => type.endsWith("?");

  Object${question} get(${className} object) {
    switch (this) {
      ${dartClass.fieldsNotStatic
        .map((p) => `case ${enumName}.${p.name}: return object.${p.name};`)
        .join("\n      ")}
    }
  }

  const ${enumName}(this.type, {${req} this.isFinal, ${req} this.isVariable, this.defaultValue,});
}
`;
  };

  generateObservable = (dartClass: DartClass): DartClass => {
    const obs = this.options.observable?.reactivityClass ?? "Observable";
    const observableName = (
      this.options.observable?.nameTemplate ?? "{{name}}Observable"
    ).replace(/{{name}}/g, dartClass.name);

    const newClass = new DartClass({
      bracket: null,
      name: observableName,
      comment: this.options.observable?.metadata,
    });
    const defaultConstructor = makeConstructorFromFields(newClass);
    defaultConstructor.params.forEach((p) => (p.isThis = false));
    defaultConstructor.isConst = false;
    const passThisToConstructor =
      this.options.observable?.passThisToConstructor ?? false;
    if (passThisToConstructor) {
      defaultConstructor.body = `{
  ${dartClass.fieldsNotStatic
    // TODO: use f.defaultValue
    .map((f) => `_${f.name} = ${obs}(this, ${f.name});`)
    .join("\n  ")}
}`;
    } else {
      defaultConstructor.body = `\
:${dartClass.fieldsNotStatic
        // TODO: use f.defaultValue
        .map((f) => `_${f.name} = ${obs}(${f.name})`)
        .join(",")};
`;
    }
    newClass.constructors.push(defaultConstructor);

    newClass.fields.push(
      ...dartClass.fieldsNotStatic.map(
        (f) =>
          new DartField(
            {
              name: `${f.name}${obs}`,
              // TODO: ObservableMap, ObservableList, ObservableSet
              type: `${obs}<${f.type ?? `Object${question}`}>`,
              isFinal: true,
              isVariable: false,
              isLate: passThisToConstructor,
            },
            newClass
          )
      )
    );
    newClass.methods.push(
      ...dartClass.fieldsNotStatic.map(
        (f) =>
          new DartFunction(
            {
              name: f.name,
              returnType: f.type,
              body: `=> ${f.name}${obs}.value;`,
              isGetter: true,
            },
            newClass
          )
      ),
      ...dartClass.fieldsNotStatic.map((f) => {
        const func = new DartFunction(
          {
            name: f.name,
            returnType: null,
            body: `=> ${f.name}${obs}.value = value;`,
            isSetter: true,
            params: [],
          },
          newClass
        );
        func.params.push(
          new DartFunctionParam(
            {
              defaultValue: null,
              isNamed: false,
              isRequired: true,
              name: "value",
              type: f.type,
            },
            func
          )
        );
        return func;
      })
    );

    return newClass;
  };

  generateBuilder = (
    dartClass: DartClass,
    dartConstructor: DartConstructorSpec
  ): string => {
    const fields: Array<DartFieldOrParam> =
      // TODO: this is never null
      dartConstructor?.params ??
      dartClass.fields.filter((f) => !f.isStatic && !f.isFinal);
    if (fields.length === 0) {
      return "";
    }
    const nameTemplate =
      this.options.builder?.nameTemplate ?? "{{name}}Builder";
    const className = `${nameTemplate.replace(/{{name}}/g, dartClass.name)}`;
    const requiredFields = fields.filter(
      (p) => p.type && !p.type.trim().endsWith("?")
    );
    const noRequired = requiredFields.length === 0;

    return `
${this.options.builder?.metadata ?? ""}\
class ${className} {
  ${fields
    .map((p) => {
      const type = p.type ?? "Object";
      const typeNull = nullableType(p.type);
      return `
  bool ${p.name}IsSet = false;
  ${typeNull} _${p.name};
  ${typeNull} get ${p.name} => _${p.name};
  set ${p.name}(${typeNull} newValue) {
    _${p.name} = newValue;
    ${p.name}IsSet = true;
  }
  ${className} ${p.name}Set(${type} newValue) {
    ${p.name} = newValue;
    return this;
  }`;
    })
    .join("\n")}

  bool get isValidValue {
    return ${
      noRequired
        ? "true"
        : requiredFields.map((p) => `${p.name} != null`).join(" && ")
    };
  }

  ${dartClass.name}${noRequired ? "" : question} tryToValue() {\
${
  noRequired
    ? ""
    : `
    if (!isValidValue) {
      return null;
    }
`
}\
    return ${instantiateConstructor(
      dartConstructor,
      fields.map((f) => ({
        name: f.name,
        value: `${f.name}${
          !f.type || f.type.trim().endsWith("?") ? "" : ` as ${f.type}`
        }`,
      })),
      {
        delimiter: "    ",
      }
    )};
  }
  
  ${className} apply(${className} other) {
    ${fields
      .map(
        (p) =>
          `if (other.${p.name}IsSet){${p.name === "other" ? "this." : ""}${
            p.name
          } = other.${p.name};}\n    `
      )
      .join("")}
    return this;
  }

  ${className} clone() => ${className}().apply(this);
  ${className} copyWith(${className} other) => clone().apply(other);
}
`;
  };
}

const nullableType = (type: string | null): string =>
  `${!type?.endsWith("?") ? `${type ?? "Object"}${question}` : type}`;

const instantiateConstructor = (
  dartConstructor: DartConstructorSpec,
  values: Array<{ name: string; value: string }>,
  options?: {
    delimiter?: string;
  }
): string => {
  const fieldsMap = new Map(values.map((v) => [v.name, v.value]));
  const constructorName = dartConstructor.name
    ? `.${dartConstructor.name}`
    : "";

  const delimiter = options?.delimiter ?? "  ";

  return `\
${dartConstructor.dartType.name}${constructorName}(
  ${delimiter}${dartConstructor.params
    .filter((p) => fieldsMap.has(p.name))
    .map((p) => {
      const value = fieldsMap.get(p.name)!;
      fieldsMap.delete(p.name);
      return `${p.isNamed ? `${p.name}: ` : ""}${value},`;
    })
    .join(`\n  ${delimiter}`)}
${delimiter})${[...fieldsMap.entries()]
    .map(([k, v]) => `..${k} = ${v}`)
    // TODO: test
    .join(",\n")}`; // set non final fields
};

export const makeConstructorFromFields = (
  dartClass: DartClass,
  opts?: { body?: string; name?: string }
): DartConstructor => {
  const classConstructor = new DartConstructor({
    isConst: dartClass.fieldsNotStatic.every((f) => f.isFinal),
    isFactory: false,
    name: opts?.name ?? null,
    params: [],
    dartType: dartClass,
    body: opts?.body ?? null,
  });
  classConstructor.params.push(
    ...dartClass.fieldsNotStatic.map(
      (f) =>
        new DartConstructorParam(
          {
            defaultValue: null,
            isNamed: true,
            // TODO: configurable to true f.isFinal
            isRequired: !f.type || !f.type.endsWith("?"),
            // TODO: support extends
            isSuper: false,
            isThis: true,
            name: f.name,
            type: f.type,
          },
          classConstructor
        )
    )
  );
  return classConstructor;
};
