import { createHash } from "crypto";
import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartConstructorSpec,
  DartField,
  DartFieldOrParam,
  DartType,
} from "./parser";

export interface GenerationOptions {
  fromJson?: {
    constructorName?: string;
    rawMap?: boolean;
  };
  toJson?: {
    nested?: boolean;
  };
  equality?: {
    deep?: boolean;
    toStringGetters?: boolean;
  };
  allFieldsGetter?: {
    name?: string;
  };
  allFieldsEnum?: {
    suffix?: string;
  };
  builder?: {
    suffix?: string;
  };
}

const defaultGenerationOptions: GenerationOptions = {
  fromJson: {},
  toJson: {},
  equality: {},
  allFieldsGetter: {},
  allFieldsEnum: {},
  builder: {},
};

export const generate = (
  dartClass: DartClass,
  options: GenerationOptions
): { content: string; md5Hash: string } => {
  options = { ...options };
  for (const [k, v] of Object.entries(defaultGenerationOptions)) {
    if (!(k in options)) {
      Object.assign(options, { [k]: v as object });
    }
  }
  const defaultConstructor =
    dartClass.defaultConstructor ?? makeConstructorFromFields(dartClass);

  const output = `\
  ${options.fromJson ? generateFromJson(defaultConstructor) : ""}\
  ${options.toJson ? generateToJson(dartClass.fieldsNotStatic) : ""}\
  ${options.equality ? generateEquality(dartClass, defaultConstructor) : ""}\
  ${
    options.allFieldsGetter
      ? generateAllFieldsGetter(dartClass.fieldsNotStatic)
      : ""
  }\
}

${options.allFieldsEnum ? generateAllFieldsEnum(dartClass) : ""}\
${options.builder ? generateBuilder(dartClass, defaultConstructor) : ""}\
`;
  const md5Hash = createHash("md5").update(output).digest("base64");
  const data = JSON.stringify({
    md5Hash,
  });

  const generatedConstructor = dartClass.defaultConstructor
    ? ""
    : `${defaultConstructor.isConst ? "const " : ""}${
        dartClass.name
      }(${defaultConstructor.params
        .map(
          (p, i) =>
            `${i === 0 ? "{" : ""}${p.isRequired ? "required " : ""}this.${
              p.name
            },${i === defaultConstructor.params.length - 1 ? "}" : ""}`
        )
        .join("")});\n`;
  const content = `
${generatedConstructor}\
// generated-dart-fixer-start${data}
${output}
// generated-dart-fixer-end${data}
`;

  return { content, md5Hash };
};

const makeConstructorFromFields = (dartClass: DartClass): DartConstructor => {
  const classConstructor = new DartConstructor(
    {
      isConst: dartClass.fieldsNotStatic.every((f) => f.isFinal),
      isFactory: false,
      name: null,
      params: [],
      dartClass,
    },
    dartClass
  );
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

export const generateFromJson = (
  dartConstructor: DartConstructorSpec
): string => {
  return `
factory ${dartConstructor.dartClass.name}.fromJson(Map json) {
  return ${instantiateConstructor(
    dartConstructor,
    dartConstructor.params.map((p) => ({
      name: p.name,
      value: fromJsonValue({ param: p }),
    }))
  )};
}
`;
};

const fromJsonValue = (
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
  const param = options.param;
  const getter = options.getter ?? `json["${param!.name}"]`;
  const pType = param?.type ?? "dynamic";
  const dartType = options.dartType ?? new DartType(pType);
  if (dartType.text === "dynamic" || dartType.text === "Object?") {
    return getter;
  }
  const nullableCast = dartType.isNullable ? `${getter} == null ? null : ` : "";
  if (dartType.isMap) {
    return `${nullableCast}(${getter} as Map).map((k, v) => MapEntry(${fromJsonValue(
      {
        dartType: dartType.generics[0],
        getter: "k",
      }
    )},${fromJsonValue({
      dartType: dartType.generics[1],
      getter: "v",
    })}))`;
  } else if (dartType.isList || dartType.isSet) {
    return `${nullableCast}(${getter} as Iterable).map((v) => ${fromJsonValue({
      dartType: dartType.generics[0],
      getter: "v",
    })}).to${dartType.name}()`;
  } else if (dartType.isDateTime) {
    return `${nullableCast}DateTime.parse(${getter} as String)`;
  } else if (dartType.isDuration) {
    return `${nullableCast}Duration(microseconds: ${getter} as int)`;
  } else if (dartType.isBigInt) {
    return `${nullableCast}BigInt.parse(${getter} as String)`;
  } else if (dartType.isPrimitive || dartType.text === "Object") {
    return `${getter} as ${dartType.text}`;
  }
  return `${dartType.name}.fromJson((${getter} as Map).cast())`;
};

export const generateToJson = (fieldsNotStatic: Array<DartField>): string => {
  return `
Map<String, Object?> toJson() {
  return {
    ${fieldsNotStatic
      .map(
        (p) =>
          `"${p.name}": ${toJsonValue({
            name: p.name,
            dartType: p.type ? new DartType(p.type) : undefined,
          })},`
      )
      .join("\n    ")}
  };  
}
`;
};

const toJsonValue = (f: {
  name: string;
  dartType: DartType | undefined;
}): string => {
  const dartType = f.dartType;
  if (!dartType || dartType.isJson) {
    return f.name;
  }
  const questionMark = dartType.isNullable ? "?" : "";
  const getter = `${f.name}${questionMark}`;
  if (dartType.isMap) {
    return `${getter}.map((k, v) => MapEntry(k.toString(), ${toJsonValue({
      dartType: dartType.generics[1],
      name: "v",
    })}))`;
  } else if (dartType.isList || dartType.isSet) {
    return `${getter}.map((v) => ${toJsonValue({
      dartType: dartType.generics[0],
      name: "v",
    })}).toList()`;
  } else if (dartType.isDateTime) {
    return `${getter}.toIso8601String()`;
  } else if (dartType.isDuration) {
    return `${getter}.inMicroseconds`;
  } else if (dartType.isBigInt) {
    return `${getter}.toString()`;
  }
  return f.name;
};

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
${dartConstructor.dartClass.name}${constructorName}(
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

export const generateEquality = (
  dartClass: DartClass,
  dartConstructor: DartConstructorSpec
): string => {
  return `
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
        p.type?.trim().endsWith("?")
          ? `(${p.name}ToNull ? null : this.${p.name})`
          : `this.${p.name}`
      }`,
    })),
    {
      delimiter: "  ",
    }
  )};
}

@override
bool operator ==(Object? other) {
  return identical(other, this) || other is ${
    dartClass.name
  } && other.runtimeType == runtimeType
  ${dartClass.fieldsNotStatic
    .map((p) => ` && other.${p.name} == ${p.name}`)
    .join("")};
}

@override
int get hashCode {
  return Object.hashAll([
    runtimeType,
    ${dartClass.fieldsNotStatic.map((p) => `${p.name},`).join("\n    ")}
  ]);
}

@override
String toString() {
  return "${dartClass.name}\${{${dartClass.fieldsNotStatic
    .map((p) => `"${p.name}":${p.name},`)
    .join("")}}}";
}
`;
};

export const generateAllFieldsGetter = (
  fieldsNotStatic: Array<DartField>
): string => {
  return `
List<Object?> get allFields => [
  ${fieldsNotStatic.map((p) => `${p.name},`).join("\n  ")}
];
`;
};

export const generateAllFieldsEnum = (dartClass: DartClass): string => {
  const className = dartClass.name;
  return `
enum ${className}Fields {
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
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(${className} object) {
    switch (this) {
      ${dartClass.fieldsNotStatic
        .map(
          (p) => `case ${className}Fields.${p.name}: return object.${p.name};`
        )
        .join("\n      ")}
    }
  }

  const ${className}Fields(this.type, {required this.isFinal, required this.isVariable, this.defaultValue,});
}
`;
};

const nullableType = (type: string | null): string =>
  `${!type?.endsWith("?") ? `${type ?? "Object"}?` : type}`;

export const generateBuilder = (
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
  const className = `${dartClass.name}Builder`;
  return `
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
    return ${fields
      .filter((p) => p.type && !p.type.trim().endsWith("?"))
      .map((p) => `${p.name} != null`)
      .join(" && ")};
  }

  ${dartClass.name}? tryToValue() {
    if (!isValidValue) {
      return null;
    }
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
