import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartDefBase,
  DartEnum,
  DartExtension,
  DartField,
  DartFunction,
  DartFunctionParam,
  DartMixin,
} from "./parser";
import { req } from "../generator/generator";

export class DartModelPrinter {
  printClass = (dartClass: DartClass): string => {
    return `\
${this.printCommentAndAnnotation(dartClass)}\
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
${this.printCommentAndAnnotation(dartEnum)}\
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
    .map((e) => {
      const args =
        e.arguments.length === 0
          ? ""
          : `(${e.arguments
              .map((a) => (a.name ? a.name + " :" : "") + a.value)
              .join(", ")})`;
      return `\
${this.printCommentAndAnnotation(dartEnum)}\
${e.name}${e.generics ?? ""}${args}`;
    })
    .join(",\n  ")};
${dartEnum.fields.map(this.printField).join("\n  ")}\
${dartEnum.constructors.map(this.printConstructor).join("\n  ")}\
${dartEnum.methods.map(this.printFunction).join("\n  ")}\
}`;
  };

  printMixin = (dartMixin: DartMixin): string => {
    return `\
${this.printCommentAndAnnotation(dartMixin)}\
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
${this.printCommentAndAnnotation(dartExtension)}\
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
${this.printCommentAndAnnotation(dartConstructor)}\
${dartConstructor.isConst ? "const " : ""}\
${dartConstructor.isFactory ? "factory " : ""}\
${dartConstructor.dartType.name}${
      dartConstructor.name ? "." + dartConstructor.name : ""
    }(${this.printParams(dartConstructor.params)})${
      dartConstructor.body ?? ";"
    }`;
  };

  printField = (dartField: DartField): string => {
    return `\
${this.printCommentAndAnnotation(dartField)}\
${dartField.isStatic ? "static " : ""}\
${dartField.isLate ? "late " : ""}\
${dartField.isFinal ? "final " : ""}\
${dartField.isVariable ? "var " : ""}\
${dartField.type ? dartField.type + " " : ""}${dartField.name}\
${dartField.defaultValue ? " = " + dartField.defaultValue : ""};`;
  };

  printFunction = (dartFunction: DartFunction): string => {
    // TODO: test getter and setter
    return `\
${this.printCommentAndAnnotation(dartFunction)}\
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
    p.isNamed ? 2 : p.isRequired ? 0 : 1;

  printParams = (
    params: Array<DartConstructorParam | DartFunctionParam>
  ): string => {
    const sorted = [...params].sort(
      (a, b) => this.getParamOrder(a) - this.getParamOrder(b)
    );
    let state: "optional" | "named" | undefined;
    const lastComma = params.length > 1;

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
        return `${open}${b}${!isLast || lastComma ? "," : ""}${close}`;
      })
      .join("");
  };

  printConstructorParam = (dartParam: DartConstructorParam): string => {
    return `\
${dartParam.isNamed && dartParam.isRequired ? `${req} ` : ""}\
${
  // TODO: verify dartParam.type is the same as the field's type
  dartParam.type && !(dartParam.isSuper || dartParam.isThis)
    ? dartParam.type + " "
    : ""
}\
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

  printCommentAndAnnotation = (dartDef: DartDefBase): string => {
    return `\
${
  dartDef.comment
    ? dartDef.comment.endsWith("\n")
      ? dartDef.comment
      : dartDef.comment + "\n"
    : ""
}\
${dartDef.annotations
  .map((a) => `${a.qualifiedName}${a.args ?? ""}\n`)
  .join()}`;
  };
}
