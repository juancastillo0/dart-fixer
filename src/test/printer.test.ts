import * as assert from "assert";
import { Test } from "mocha";
import { DartImports } from "../parser";
import {
  generateAllFieldsEnum,
  generateAllFieldsGetter,
  generateBuilder,
  generateEquality,
  generateFromJson,
  generateToJson,
} from "../printer";

export const testF = (name: string, func: () => unknown): Test => {
  return test(name, () => {
    console.log(`Running ${name}.`);
    let intervals = 1;
    const timer: NodeJS.Timer = setInterval(() => {
      console.log(`Running ${name}. ${intervals * 2} seconds`);
      intervals += 1;
    }, 2000);
    const result = func();
    if (result instanceof Promise) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      result.then(() => {
        clearInterval(timer);
      });
    } else {
      clearInterval(timer);
    }

    return result;
  });
};

suite("Parser Test Suite", () => {
  const text = `
class Model {
final int? v;
/// Docs for [value]
  final String value;
final List<String>? params;

  Model({
    this.v = 3,
    required this.value,
    List<String?> this.params,
  });

  int? get length {
    return params?.length;
  }

}
`;
  const values = new DartImports(text);
  const dartClass = values.classes[0];

  test("generateFromJson", () => {
    const output = generateFromJson(dartClass.constructors[0]);
    assert.equal(
      output,
      `
factory Model.fromJson(Map json) {
  return Model(
    v: json["v"] as int?,
    value: json["value"] as String,
    params: (json["params"] as Iterable).map((v) => v as String?).toList(),
  );
}
`
    );
  });

  test("generateToJson", () => {
    const output = generateToJson(dartClass);
    assert.equal(
      output,
      `
Map<String, Object?> toJson() {
  return {
    "v": v,
    "value": value,
    "params": params,
  };  
}
`
    );
  });

  test("generateEquality", () => {
    const output = generateEquality(dartClass);
    assert.equal(
      output,
      `
Model copyWith({
  int? v, bool vToNull = false,
  String? value,
  List<String?>? params,
}) {
  return Model(
    v: v ?? (vToNull ? null : this.v),
    value: value ?? this.value,
    params: params ?? this.params,
  );
}

@override
bool operator ==(Object? other) {
  return identical(other, this) || other is Model && other.runtimeType == runtimeType
   && other.v == v && other.value == value && other.params == params;
}

@override
int get hashCode {
  return Object.hashAll([
    runtimeType,
    v,
    value,
    params,
  ]);
}

@override
String toString() {
  return 'Model(v:$v,value:$value,params:$params,length:$length,);';
}
`
    );
  });

  test("generateAllFieldsGetter", () => {
    const output = generateAllFieldsGetter(dartClass);
    assert.equal(
      output,
      `
List<Object?> get allFields => [
  v,
  value,
  params,
];
`
    );
  });

  test("generateAllFieldsEnum", () => {
    const output = generateAllFieldsEnum(dartClass);
    assert.equal(
      output,
      `
enum ModelFields {
  v("int?", isFinal: true, isVariable: false, defaultValue: null,),
  value("String", isFinal: true, isVariable: false, defaultValue: null,),
  params("List<String>?", isFinal: true, isVariable: false, defaultValue: null,);

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith('?');

  Object? get(Model object) {
    switch (this) {
      case ModelFields.v: return object.v;
      case ModelFields.value: return object.value;
      case ModelFields.params: return object.params;
    }
  }

  const ModelFields(this.type, {required this.isFinal, required this.isVariable, this.defaultValue,});
}
`
    );
  });

  test("generateBuilder", () => {
    const output = generateBuilder(dartClass);
    assert.equal(
      output,
      `
class ModelBuilder {
  
  bool vIsSet = false;
  int? _v;
  int? get v => _v;
  set v(int? newValue) {
    _v = newValue;
    vIsSet = true;
  }
  ModelBuilder vSet(int? newValue) {
    v = newValue;
    return this;
  }

  bool valueIsSet = false;
  String? _value;
  String? get value => _value;
  set value(String? newValue) {
    _value = newValue;
    valueIsSet = true;
  }
  ModelBuilder valueSet(String newValue) {
    value = newValue;
    return this;
  }

  bool paramsIsSet = false;
  List<String?>? _params;
  List<String?>? get params => _params;
  set params(List<String?>? newValue) {
    _params = newValue;
    paramsIsSet = true;
  }
  ModelBuilder paramsSet(List<String?> newValue) {
    params = newValue;
    return this;
  }

  bool get isValidValue {
    return value != null && params != null;
  }

  Model? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Model(
      v: v,
      value: value as String,
      params: params as List<String?>,
    );
  }
  
  ModelBuilder apply(ModelBuilder other) {
    if (other.vIsSet){v = other.v;}
    if (other.valueIsSet){value = other.value;}
    if (other.paramsIsSet){params = other.params;}
    
    return this;
  }

  ModelBuilder clone() => ModelBuilder().apply(this);
  ModelBuilder copyWith(ModelBuilder other) => clone().apply(other);
}
`
    );
  });
});
