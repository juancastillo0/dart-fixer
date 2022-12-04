import * as assert from "assert";
import { Test } from "mocha";
import { parseClassesAntlr } from "../antlr/antlr-parser";
import {
  generate,
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

suite("Printer Test Suite", () => {
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
  const values = parseClassesAntlr(text);
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
    const output = generateToJson(dartClass.fieldsNotStatic);
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
    const output = generateEquality(dartClass, dartClass.defaultConstructor!);
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
bool operator ==(Object other) {
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
  return "Model\${{"v":v,"value":value,"params":params,}}";
}
`
    );
  });

  test("generateAllFieldsGetter", () => {
    const output = generateAllFieldsGetter(dartClass.fieldsNotStatic);
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

  bool get isNullable => type.endsWith("?");

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
    const output = generateBuilder(dartClass, dartClass.defaultConstructor!);
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

  test("generate", () => {
    const parsed = parseClassesAntlr(`
class O {
  final String a;
  final int? b;
  final d;
  var c;
  int e;
  Map<String, dynamic>? f;
}`);
    const { content } = generate(parsed.classes[0], {});
    assert.equal(
      content,
      `

O({required this.a,this.b,required this.d,required this.c,required this.e,this.f,});
// generated-dart-fixer-start{"md5Hash":"ZbPjUGj+ojwy5CEX/TDPDg=="}
  
factory O.fromJson(Map json) {
  return O(
    a: json["a"] as String,
    b: json["b"] as int?,
    d: json["d"],
    c: json["c"],
    e: json["e"] as int,
    f: json["f"] == null ? null : (json["f"] as Map).map((k, v) => MapEntry(k as String,v)),
  );
}
  
Map<String, Object?> toJson() {
  return {
    "a": a,
    "b": b,
    "d": d,
    "c": c,
    "e": e,
    "f": f,
  };  
}
  
O copyWith({
  String? a,
  int? b, bool bToNull = false,
  Object? d,
  Object? c,
  int? e,
  Map<String, dynamic>? f, bool fToNull = false,
}) {
  return O(
    a: a ?? this.a,
    b: b ?? (bToNull ? null : this.b),
    d: d ?? this.d,
    c: c ?? this.c,
    e: e ?? this.e,
    f: f ?? (fToNull ? null : this.f),
  );
}

@override
bool operator ==(Object other) {
  return identical(other, this) || other is O && other.runtimeType == runtimeType
   && other.a == a && other.b == b && other.d == d && other.c == c && other.e == e && other.f == f;
}

@override
int get hashCode {
  return Object.hashAll([
    runtimeType,
    a,
    b,
    d,
    c,
    e,
    f,
  ]);
}

@override
String toString() {
  return "O\${{"a":a,"b":b,"d":d,"c":c,"e":e,"f":f,}}";
}
  
List<Object?> get allFields => [
  a,
  b,
  d,
  c,
  e,
  f,
];
}


enum OFields {
  a("String", isFinal: true, isVariable: false, defaultValue: null,),
  b("int?", isFinal: true, isVariable: false, defaultValue: null,),
  d("", isFinal: true, isVariable: false, defaultValue: null,),
  c("", isFinal: false, isVariable: true, defaultValue: null,),
  e("int", isFinal: false, isVariable: false, defaultValue: null,),
  f("Map<String, dynamic>?", isFinal: false, isVariable: false, defaultValue: null,);

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(O object) {
    switch (this) {
      case OFields.a: return object.a;
      case OFields.b: return object.b;
      case OFields.d: return object.d;
      case OFields.c: return object.c;
      case OFields.e: return object.e;
      case OFields.f: return object.f;
    }
  }

  const OFields(this.type, {required this.isFinal, required this.isVariable, this.defaultValue,});
}

class OBuilder {
  
  bool aIsSet = false;
  String? _a;
  String? get a => _a;
  set a(String? newValue) {
    _a = newValue;
    aIsSet = true;
  }
  OBuilder aSet(String newValue) {
    a = newValue;
    return this;
  }

  bool bIsSet = false;
  int? _b;
  int? get b => _b;
  set b(int? newValue) {
    _b = newValue;
    bIsSet = true;
  }
  OBuilder bSet(int? newValue) {
    b = newValue;
    return this;
  }

  bool dIsSet = false;
  Object? _d;
  Object? get d => _d;
  set d(Object? newValue) {
    _d = newValue;
    dIsSet = true;
  }
  OBuilder dSet(Object newValue) {
    d = newValue;
    return this;
  }

  bool cIsSet = false;
  Object? _c;
  Object? get c => _c;
  set c(Object? newValue) {
    _c = newValue;
    cIsSet = true;
  }
  OBuilder cSet(Object newValue) {
    c = newValue;
    return this;
  }

  bool eIsSet = false;
  int? _e;
  int? get e => _e;
  set e(int? newValue) {
    _e = newValue;
    eIsSet = true;
  }
  OBuilder eSet(int newValue) {
    e = newValue;
    return this;
  }

  bool fIsSet = false;
  Map<String, dynamic>? _f;
  Map<String, dynamic>? get f => _f;
  set f(Map<String, dynamic>? newValue) {
    _f = newValue;
    fIsSet = true;
  }
  OBuilder fSet(Map<String, dynamic>? newValue) {
    f = newValue;
    return this;
  }

  bool get isValidValue {
    return a != null && e != null;
  }

  O? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return O(
      a: a as String,
      b: b,
      d: d,
      c: c,
      e: e as int,
      f: f,
    );
  }
  
  OBuilder apply(OBuilder other) {
    if (other.aIsSet){a = other.a;}
    if (other.bIsSet){b = other.b;}
    if (other.dIsSet){d = other.d;}
    if (other.cIsSet){c = other.c;}
    if (other.eIsSet){e = other.e;}
    if (other.fIsSet){f = other.f;}
    
    return this;
  }

  OBuilder clone() => OBuilder().apply(this);
  OBuilder copyWith(OBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"ZbPjUGj+ojwy5CEX/TDPDg=="}
`
    );
  });
});
