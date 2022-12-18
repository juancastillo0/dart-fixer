// generated-dart-fixer-json{"from":"./model.doc.json","kind":"document","md5Hash":"kWrIOsnLIDnOpalUoeQKBA=="}

class Model {
  final String name;
  final int value;
  final List<String> list;
  final List<ListAny> listAny;
  final M m;

  const Model({
    required this.name,
    required this.value,
    required this.list,
    required this.listAny,
    required this.m,
  });
// generated-dart-fixer-start{"md5Hash":"U1/XOLuOdueO5EhQ++x+RA=="}

  factory Model.fromJson(Map json) {
    return Model(
      name: json["name"] as String,
      value: json["value"] as int,
      list: (json["list"] as Iterable).map((v) => v as String).toList(),
      listAny: (json["listAny"] as Iterable).map((v) => v).toList(),
      m: (json["m"] as Map).map((k, v) => MapEntry(k as String, v)),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "name": name,
      "value": value,
      "list": list,
      "listAny": listAny.map((v) => v).toList(),
      "m": m,
    };
  }

  Model copyWith({
    String? name,
    int? value,
    List<String>? list,
    List<ListAny>? listAny,
    M? m,
  }) {
    return Model(
      name: name ?? this.name,
      value: value ?? this.value,
      list: list ?? this.list,
      listAny: listAny ?? this.listAny,
      m: m ?? this.m,
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Model &&
            other.runtimeType == runtimeType &&
            other.name == name &&
            other.value == value &&
            other.list == list &&
            other.listAny == listAny &&
            other.m == m;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      name,
      value,
      list,
      listAny,
      m,
    ]);
  }

  @override
  String toString() {
    return "Model${{
      "name": name,
      "value": value,
      "list": list,
      "listAny": listAny,
      "m": m,
    }}";
  }

  List<Object?> get allFields => [
        name,
        value,
        list,
        listAny,
        m,
      ];
}

enum ModelFields {
  name(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  value(
    "int",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  list(
    "List<String>",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  listAny(
    "List<ListAny>",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  m(
    "M",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Model object) {
    switch (this) {
      case ModelFields.name:
        return object.name;
      case ModelFields.value:
        return object.value;
      case ModelFields.list:
        return object.list;
      case ModelFields.listAny:
        return object.listAny;
      case ModelFields.m:
        return object.m;
    }
  }

  const ModelFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class ModelBuilder {
  bool nameIsSet = false;
  String? _name;
  String? get name => _name;
  set name(String? newValue) {
    _name = newValue;
    nameIsSet = true;
  }

  ModelBuilder nameSet(String newValue) {
    name = newValue;
    return this;
  }

  bool valueIsSet = false;
  int? _value;
  int? get value => _value;
  set value(int? newValue) {
    _value = newValue;
    valueIsSet = true;
  }

  ModelBuilder valueSet(int newValue) {
    value = newValue;
    return this;
  }

  bool listIsSet = false;
  List<String>? _list;
  List<String>? get list => _list;
  set list(List<String>? newValue) {
    _list = newValue;
    listIsSet = true;
  }

  ModelBuilder listSet(List<String> newValue) {
    list = newValue;
    return this;
  }

  bool listAnyIsSet = false;
  List<ListAny>? _listAny;
  List<ListAny>? get listAny => _listAny;
  set listAny(List<ListAny>? newValue) {
    _listAny = newValue;
    listAnyIsSet = true;
  }

  ModelBuilder listAnySet(List<ListAny> newValue) {
    listAny = newValue;
    return this;
  }

  bool mIsSet = false;
  M? _m;
  M? get m => _m;
  set m(M? newValue) {
    _m = newValue;
    mIsSet = true;
  }

  ModelBuilder mSet(M newValue) {
    m = newValue;
    return this;
  }

  bool get isValidValue {
    return name != null &&
        value != null &&
        list != null &&
        listAny != null &&
        m != null;
  }

  Model? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Model(
      name: name as String,
      value: value as int,
      list: list as List<String>,
      listAny: listAny as List<ListAny>,
      m: m as M,
    );
  }

  ModelBuilder apply(ModelBuilder other) {
    if (other.nameIsSet) {
      name = other.name;
    }
    if (other.valueIsSet) {
      value = other.value;
    }
    if (other.listIsSet) {
      list = other.list;
    }
    if (other.listAnyIsSet) {
      listAny = other.listAny;
    }
    if (other.mIsSet) {
      m = other.m;
    }

    return this;
  }

  ModelBuilder clone() => ModelBuilder().apply(this);
  ModelBuilder copyWith(ModelBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"U1/XOLuOdueO5EhQ++x+RA=="}
typedef M = Map<String, Object?>;

typedef ListAny = Object?;
