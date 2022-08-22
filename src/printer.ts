import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
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
): string => {
  options = { ...options };
  for (const [k, v] of Object.entries(defaultGenerationOptions)) {
    if (!(k in options)) {
      Object.assign(options, { [k]: v as object });
    }
  }
  return `
// generated-by-dart-fixer-start
  ${options.fromJson ? generateFromJson(dartClass.constructors[0]) : ""}\
  ${options.toJson ? generateToJson(dartClass) : ""}\
  ${options.equality ? generateEquality(dartClass) : ""}\
  ${options.allFieldsGetter ? generateAllFieldsGetter(dartClass) : ""}\
}

${options.allFieldsEnum ? generateAllFieldsEnum(dartClass) : ""}\
${options.builder ? generateBuilder(dartClass) : ""}\
// generated-by-dart-fixer-end
`;
};

export const generateFromJson = (dartConstructor: DartConstructor): string => {
  return `
factory ${dartConstructor.dartClass.name}.fromJson(Map json) {
  return ${dartConstructor.dartClass.name}(
    ${dartConstructor.params
      .map(
        (p) =>
          `${p.isNamed ? `${p.name}: ` : ""}${fromJsonValue({ param: p })},`
      )
      .join("\n    ")}
  );  
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

export const generateToJson = (dartClass: DartClass): string => {
  return `
Map<String, Object?> toJson() {
  return {
    ${dartClass.fields
      .filter((p) => !p.isStatic)
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

export const generateEquality = (dartClass: DartClass): string => {
  return `
@override
bool operator ==(Object? other) {
  return identical(other, this) || other is ${
    dartClass.name
  } && other.runtimeType == runtimeType
  ${dartClass.fields
    .filter((p) => !p.isStatic)
    .map((p) => ` && other.${p.name} == ${p.name}`)
    .join("")};
}

@override
int get hashCode {
  return Object.hashAll([
    runtimeType,
    ${dartClass.fields
      .filter((p) => !p.isStatic)
      .map((p) => `${p.name},`)
      .join("\n    ")}
  ]);
}

@override
String toString() {
  return '${dartClass.name}(${dartClass.fields
    .filter((p) => !p.isStatic)
    .map((p) => `${p.name}:$${p.name},`)
    .join("")}${dartClass.methods
    .filter((p) => !p.isStatic && p.isGetter)
    .map((p) => `${p.name}:$${p.name},`)
    .join("")});';
}
`;
};

export const generateAllFieldsGetter = (dartClass: DartClass): string => {
  return `
List<Object?> get allFields => [
  ${dartClass.fields
    .filter((p) => !p.isStatic)
    .map((p) => `${p.name},`)
    .join("\n  ")}
];
`;
};

export const generateAllFieldsEnum = (dartClass: DartClass): string => {
  return `
enum ${dartClass.name}Fields {
  ${dartClass.fields
    .filter((p) => !p.isStatic)
    .map((p) => `${p.name}("${p.type ?? ""}", ${p.isFinal.toString()})`)
    .join(",\n  ")};

  final String type;
  final bool isFinal;

  bool get isNullable => type.endsWith('?');

  const ${dartClass.name}Fields(this.type, this.isFinal);
}
`;
};

const nullableType = (type: string | null): string =>
  `${!type?.endsWith("?") ? `${type ?? "Object"}?` : type}`;

export const generateBuilder = (dartClass: DartClass): string => {
  const className = `${dartClass.name}Builder`;
  return `
class ${className} {
  ${dartClass.fields
    .filter((p) => !p.isStatic)
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
  
  ${className} apply(${className} other) {
    ${dartClass.fields
      .filter((p) => !p.isStatic)
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
