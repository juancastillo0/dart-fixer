import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartFunction,
  DartFunctionParam,
  toDartIdentifier,
} from "../dart-base/parser";
import { makeConstructorFromFields, question } from "../generator/generator";
import { recase } from "../utils";

export const unionMapMethod = ({
  maybe,
  unionBaseClass,
  variants,
}: {
  maybe: boolean;
  unionBaseClass: DartClass;
  variants: Array<{ variant: DartClass; name: string }>;
}): DartFunction => {
  const func = new DartFunction(
    {
      generics: "<T>",
      isExternal: false,
      isGetter: false,
      isSetter: false,
      isOperator: false,
      isStatic: false,
      name: `map${maybe ? "Maybe" : ""}`,
      returnType: "T",
      params: [],
      body: `{
  final v = this;
  ${variants
    .map(
      ({ name, variant }) => `\
  if (v is ${recase(variant.name, "PascalCase")}) {
    return ${
      maybe
        ? `(${recase(name, "camelCase")} ?? orElse)`
        : recase(name, "camelCase")
    }(v);
  }`
    )
    .join(" else ")}
  ${
    maybe
      ? "return orElse(v);"
      : `throw StateError("Unknown variant for union ${unionBaseClass.name} \${this}");`
  }
  }`,
    },
    unionBaseClass
  );
  if (maybe) {
    func.params.push(
      new DartFunctionParam(
        {
          defaultValue: null,
          isNamed: true,
          isRequired: true,
          name: "orElse",
          type: `T Function(${unionBaseClass.name} ${recase(
            unionBaseClass.name,
            "camelCase"
          )})`,
        },
        func
      )
    );
  }
  func.params.push(
    ...variants.map(
      ({ name, variant }) =>
        new DartFunctionParam(
          {
            defaultValue: null,
            isNamed: true,
            isRequired: !maybe,
            name: recase(name, "camelCase"),
            type: `T Function(${recase(variant.name, "PascalCase")} ${recase(
              name,
              "camelCase"
            )})${maybe ? question : ""}`,
          },
          func
        )
    )
  );
  return func;
};

export enum UnionKind {
  discriminator,
  nested,
  noDiscriminator,
}

export function createUnionClass(
  customName: string,
  schema:
    | {
        kind: UnionKind.noDiscriminator | UnionKind.nested;
        discriminator?: undefined;
        mapping: Array<{ name: string; variant: DartClass }>;
      }
    | {
        kind: UnionKind.discriminator;
        discriminator: string;
        mapping: Array<{ name: string; variant: DartClass }>;
      }
): DartClass {
  const unionBaseClass = new DartClass({
    name: customName,
    bracket: null,
  });
  unionBaseClass.constructors.push(
    new DartConstructor({
      dartType: unionBaseClass,
      isConst: true,
      isFactory: false,
      name: null,
      params: [],
      body: null,
    })
  );

  const variants = schema.mapping;

  unionBaseClass.constructors.push(
    ...variants.map(({ variant, name }) => {
      const defaultConstructor =
        variant.defaultConstructor ?? makeConstructorFromFields(variant);
      const variantFactory = new DartConstructor({
        dartType: unionBaseClass,
        isConst: defaultConstructor.isConst,
        isFactory: true,
        name: recase(toDartIdentifier(name), "camelCase"),
        params: [],
        body: ` = ${variant.name};`,
      });
      variantFactory.params.push(
        ...defaultConstructor.params.map(
          (p) =>
            new DartConstructorParam(
              {
                isNamed: p.isNamed,
                isRequired: p.isRequired,
                name: p.name,
                type: p.type,
              },
              variantFactory
            )
        )
      );
      return variantFactory;
    })
  );

  const func = unionMapMethod({ maybe: false, unionBaseClass, variants });
  unionBaseClass.methods.push(func);
  const funcMaybe = unionMapMethod({ maybe: true, unionBaseClass, variants });
  unionBaseClass.methods.push(funcMaybe);
  const stateError = `throw StateError("Unknown variant for union ${unionBaseClass.name} \${json}");`;

  const fromJsonFactory = new DartConstructor({
    dartType: unionBaseClass,
    isConst: false,
    isFactory: true,
    name: "fromJson",
    params: [],
    body:
      schema.kind === UnionKind.noDiscriminator
        ? `{
  for (final func in const [${variants
    .map((v) => `${v.name}.fromJson,`)
    .join("")}]) {
    try {
      return func(json);
    } catch(_) {}
  }
  ${stateError}
  }`
        : `{
  switch (${
    schema.kind === UnionKind.discriminator
      ? `json["${schema.discriminator}"] as String`
      : "json.entries.where((e) => e.value is Map).first.key"
  }) {
    ${variants
      .map(
        ({ name, variant }) => `\
    case "${name}":
      return ${variant.name}.fromJson(${
          schema.kind === UnionKind.discriminator
            ? `json`
            : `json["${name}"] as Map<String, Object${question}>`
        });`
      )
      .join("\n  ")}
  }
  ${stateError}
  }`,
  });
  fromJsonFactory.params.push(
    new DartConstructorParam(
      {
        defaultValue: null,
        isNamed: false,
        isRequired: true,
        isSuper: false,
        isThis: false,
        name: "json",
        type: "Map",
      },
      fromJsonFactory
    )
  );
  unionBaseClass.constructors.push(fromJsonFactory);
  return unionBaseClass;
}
