import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartEnum,
  DartExtension,
  DartField,
  DartFunction,
  DartFunctionParam,
  DartMixin,
} from "./parser";
import { req } from "./printer";

export class DartModelPrinter {
  printClass = (dartClass: DartClass): string => {
    return `\
${dartClass.isAbstract ? "abstract " : ""}class ${dartClass.name}\
${dartClass.generics ?? ""}\
${dartClass.extendsBound ? " extends " + dartClass.extendsBound : ""}\
${dartClass.mixins.length > 0 ? " with " + dartClass.mixins.join(", ") : ""}\
${
  dartClass.interfaces.length > 0
    ? " implements " + dartClass.interfaces.join(", ")
    : ""
}\
{
  ${dartClass.constructors.map(this.printConstructor).join("\n\n  ")}\
  ${dartClass.fields.map(this.printField).join("\n  ")}\
  ${dartClass.methods.map(this.printFunction).join("\n  ")}\
}`;
  };

  printEnum = (dartEnum: DartEnum): string => {
    return `\
enum ${dartEnum.name}\
${dartEnum.generics ?? ""}\
${dartEnum.mixins.length > 0 ? " with " + dartEnum.mixins.join(", ") : ""}\
${
  dartEnum.interfaces.length > 0
    ? " implements " + dartEnum.interfaces.join(", ")
    : ""
}\
{
  ${dartEnum.entries
    .map(
      (e) =>
        `${e.name}${e.generics ?? ""}${
          e.arguments.length === 0
            ? ""
            : `(${e.arguments
                .map((a) => (a.name ? a.name + " :" : "") + a.value)
                .join(", ")})`
        }`
    )
    .join(",\n  ")};
${dartEnum.fields.map(this.printField).join("\n  ")}\
${dartEnum.constructors.map(this.printConstructor).join("\n  ")}\
${dartEnum.methods.map(this.printFunction).join("\n  ")}\
}`;
  };

  printMixin = (dartMixin: DartMixin): string => {
    return `\
mixin ${dartMixin.name}\
${dartMixin.generics ?? ""}\
${dartMixin.on.length > 0 ? " on " + dartMixin.on.join(", ") : ""}\
${
  dartMixin.interfaces.length > 0
    ? " implements " + dartMixin.interfaces.join(", ")
    : ""
}\
{
${dartMixin.fields.map(this.printField).join("\n  ")}
${dartMixin.methods.map(this.printFunction).join("\n  ")}
}`;
  };

  printExtension = (dartExtension: DartExtension): string => {
    return `\
extension${dartExtension.name ? " " + dartExtension.name : ""}\
${dartExtension.generics ?? ""}\
${dartExtension.on ? " on " + dartExtension.on : ""}\
}\
{
${dartExtension.fields.map(this.printField).join("\n  ")}
${dartExtension.methods.map(this.printFunction).join("\n  ")}
}`;
  };

  printConstructor = (dartConstructor: DartConstructor): string => {
    return `\
${dartConstructor.isConst ? "const " : ""}\
${dartConstructor.isFactory ? "factory " : ""}\
${dartConstructor.dartClass.name}${
      dartConstructor.name ? "." + dartConstructor.name : ""
    }(${this.printParams(dartConstructor.params)})${
      dartConstructor.body ?? ";"
    }`;
  };

  printField = (dartField: DartField): string => {
    return `\
${dartField.isStatic ? "static " : ""}\
${dartField.isFinal ? "final " : ""}\
${dartField.isVariable ? "var " : ""}\
${dartField.type ? dartField.type + " " : ""}${dartField.name}\
${dartField.defaultValue ? " = " + dartField.defaultValue : ""};`;
  };

  printFunction = (dartFunction: DartFunction): string => {
    return `\
${dartFunction.isStatic ? "static " : ""}\
${dartFunction.isExternal ? "external " : ""}\
${dartFunction.returnType ? dartFunction.returnType + " " : ""}\
${dartFunction.isOperator ? "operator " : ""}\
${dartFunction.isGetter ? "get " : ""}\
${dartFunction.isSetter ? "set " : ""}\
${dartFunction.name}${dartFunction.generics ?? ""}\
${dartFunction.isGetter ? "" : `(${this.printParams(dartFunction.params)})`}\
${dartFunction.body ?? ";"}`;
  };

  getParamOrder = (p: DartConstructorParam | DartFunctionParam): number =>
    (p.isRequired ? 0 : 1) + (p.isNamed ? 2 : 0);

  printParams = (
    params: Array<DartConstructorParam | DartFunctionParam>
  ): string => {
    const sorted = [...params].sort(
      (a, b) => this.getParamOrder(a) - this.getParamOrder(b)
    );
    let state: "optional" | "named" | undefined;

    return sorted
      .map((p, index) => {
        const isLast = index === sorted.length - 1;
        const prev = state;
        state = p.isNamed ? "named" : p.isRequired ? undefined : "optional";
        const b =
          p instanceof DartConstructorParam
            ? this.printConstructorParam(p)
            : this.printParam(p);
        const open =
          state && state !== prev ? (state === "named" ? "{" : "[") : "";
        const close = isLast && state ? (state === "named" ? "}" : "]") : "";
        return `${open}${b},${close}`;
      })
      .join("");
  };

  printConstructorParam = (dartParam: DartConstructorParam): string => {
    return `\
${dartParam.isNamed && dartParam.isRequired ? `${req} ` : ""}\
${dartParam.type ? dartParam.type + " " : ""}\
${!dartParam.dartConstructor.isFactory && dartParam.isSuper ? "super." : ""}\
${!dartParam.dartConstructor.isFactory && dartParam.isThis ? "this." : ""}\
${dartParam.name}\
${dartParam.defaultValue ? " = " + dartParam.defaultValue : ""}`;
  };

  printParam = (dartParam: DartFunctionParam): string => {
    return `\
${dartParam.isNamed && dartParam.isRequired ? `${req} ` : ""}\
${dartParam.type ? dartParam.type + " " : ""}\
${dartParam.name}\
${dartParam.defaultValue ? " = " + dartParam.defaultValue : ""}`;
  };
}
