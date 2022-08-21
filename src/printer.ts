import { DartClass, DartConstructor, DartConstructorParam } from "./parser";

export const generateFromJson = (dartConstructor: DartConstructor): string => {
  return `
factory ${dartConstructor.dartClass.name}.fromJson(Map json) {
  return ${dartConstructor.dartClass.name}(
    ${dartConstructor.params
      .map((p) => (p.isNamed ? `${p.name}:` : "") + ` ${castJsonValue(p)},`)
      .join("\n    ")}
  );  
}
`;
};

function castJsonValue(p: DartConstructorParam): string {
  const cast = !p.type ? "" : ` as ${p.type}`;
  return `json["${p.name}"]${cast}`;
}

export const generateToJson = (dartClass: DartClass): string => {
  return `
Map<String, Object?> toJson() {
  return {
    ${dartClass.fields
      .filter((p) => !p.isStatic)
      .map((p) => `"${p.name}": ${p.name},`)
      .join("\n    ")}
  };  
}
`;
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
    .join("")}
};

@override
int get hashCode {
  return Object.hasAll([
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
  set ${p.name}(${type} newValue) {
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
