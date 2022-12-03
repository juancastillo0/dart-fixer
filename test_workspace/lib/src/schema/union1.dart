// generated from "./union1.jtd.json"

class Union1One extends Union1 {
  final String id;
  final Map<String, bool?> maps;

  const Union1One({
    required this.id,
    required this.maps,
  });
// generated-dart-fixer-start{"md5Hash":"vdsw9NXbQj7yTzd6oBRC6w=="}

  factory Union1One.fromJson(Map json) {
    return Union1One(
      id: json["id"] as String,
      maps: (json["maps"] as Map)
          .map((k, v) => MapEntry(k as String, v as bool?)),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "id": id,
      "maps": maps,
    };
  }

  Union1One copyWith({
    String? id,
    Map<String, bool?>? maps,
  }) {
    return Union1One(
      id: id ?? this.id,
      maps: maps ?? this.maps,
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Union1One &&
            other.runtimeType == runtimeType &&
            other.id == id &&
            other.maps == maps;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      id,
      maps,
    ]);
  }

  @override
  String toString() {
    return "Union1One${{
      "id": id,
      "maps": maps,
    }}";
  }

  List<Object?> get allFields => [
        id,
        maps,
      ];
}

enum Union1OneFields {
  id(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  maps(
    "Map<String, bool?>",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Union1One object) {
    switch (this) {
      case Union1OneFields.id:
        return object.id;
      case Union1OneFields.maps:
        return object.maps;
    }
  }

  const Union1OneFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class Union1OneBuilder {
  bool idIsSet = false;
  String? _id;
  String? get id => _id;
  set id(String? newValue) {
    _id = newValue;
    idIsSet = true;
  }

  Union1OneBuilder idSet(String newValue) {
    id = newValue;
    return this;
  }

  bool mapsIsSet = false;
  Map<String, bool?>? _maps;
  Map<String, bool?>? get maps => _maps;
  set maps(Map<String, bool?>? newValue) {
    _maps = newValue;
    mapsIsSet = true;
  }

  Union1OneBuilder mapsSet(Map<String, bool?> newValue) {
    maps = newValue;
    return this;
  }

  bool get isValidValue {
    return id != null && maps != null;
  }

  Union1One? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Union1One(
      id: id as String,
      maps: maps as Map<String, bool?>,
    );
  }

  Union1OneBuilder apply(Union1OneBuilder other) {
    if (other.idIsSet) {
      id = other.id;
    }
    if (other.mapsIsSet) {
      maps = other.maps;
    }

    return this;
  }

  Union1OneBuilder clone() => Union1OneBuilder().apply(this);
  Union1OneBuilder copyWith(Union1OneBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"vdsw9NXbQj7yTzd6oBRC6w=="}

class Union1Two extends Union1 {
  final bool? isAdmin;
  final String? op;
  final List<String>? list;

  const Union1Two({
    this.isAdmin,
    this.op,
    this.list,
  });
// generated-dart-fixer-start{"md5Hash":"KmzAVEe1V19dXGi8pS5fYQ=="}

  factory Union1Two.fromJson(Map json) {
    return Union1Two(
      isAdmin: json["isAdmin"] as bool?,
      op: json["op"] as String?,
      list: json["list"] == null
          ? null
          : (json["list"] as Iterable).map((v) => v as String).toList(),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "isAdmin": isAdmin,
      "op": op,
      "list": list,
    };
  }

  Union1Two copyWith({
    bool? isAdmin,
    bool isAdminToNull = false,
    String? op,
    bool opToNull = false,
    List<String>? list,
    bool listToNull = false,
  }) {
    return Union1Two(
      isAdmin: isAdmin ?? (isAdminToNull ? null : this.isAdmin),
      op: op ?? (opToNull ? null : this.op),
      list: list ?? (listToNull ? null : this.list),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Union1Two &&
            other.runtimeType == runtimeType &&
            other.isAdmin == isAdmin &&
            other.op == op &&
            other.list == list;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      isAdmin,
      op,
      list,
    ]);
  }

  @override
  String toString() {
    return "Union1Two${{
      "isAdmin": isAdmin,
      "op": op,
      "list": list,
    }}";
  }

  List<Object?> get allFields => [
        isAdmin,
        op,
        list,
      ];
}

enum Union1TwoFields {
  isAdmin(
    "bool?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  op(
    "String?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  list(
    "List<String>?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Union1Two object) {
    switch (this) {
      case Union1TwoFields.isAdmin:
        return object.isAdmin;
      case Union1TwoFields.op:
        return object.op;
      case Union1TwoFields.list:
        return object.list;
    }
  }

  const Union1TwoFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class Union1TwoBuilder {
  bool isAdminIsSet = false;
  bool? _isAdmin;
  bool? get isAdmin => _isAdmin;
  set isAdmin(bool? newValue) {
    _isAdmin = newValue;
    isAdminIsSet = true;
  }

  Union1TwoBuilder isAdminSet(bool? newValue) {
    isAdmin = newValue;
    return this;
  }

  bool opIsSet = false;
  String? _op;
  String? get op => _op;
  set op(String? newValue) {
    _op = newValue;
    opIsSet = true;
  }

  Union1TwoBuilder opSet(String? newValue) {
    op = newValue;
    return this;
  }

  bool listIsSet = false;
  List<String>? _list;
  List<String>? get list => _list;
  set list(List<String>? newValue) {
    _list = newValue;
    listIsSet = true;
  }

  Union1TwoBuilder listSet(List<String>? newValue) {
    list = newValue;
    return this;
  }

  bool get isValidValue {
    return true;
  }

  Union1Two tryToValue() {
    return Union1Two(
      isAdmin: isAdmin,
      op: op,
      list: list,
    );
  }

  Union1TwoBuilder apply(Union1TwoBuilder other) {
    if (other.isAdminIsSet) {
      isAdmin = other.isAdmin;
    }
    if (other.opIsSet) {
      op = other.op;
    }
    if (other.listIsSet) {
      list = other.list;
    }

    return this;
  }

  Union1TwoBuilder clone() => Union1TwoBuilder().apply(this);
  Union1TwoBuilder copyWith(Union1TwoBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"KmzAVEe1V19dXGi8pS5fYQ=="}

class Union1 {
  const Union1();

  const factory Union1.one({
    required String id,
    required Map<String, bool?> maps,
  }) = Union1One;

  const factory Union1.two({
    bool? isAdmin,
    String? op,
    List<String>? list,
  }) = Union1Two;

  factory Union1.fromJson(Map json) {
    switch (json["runtimeType"] as String) {
      case "One":
        return Union1One.fromJson(json);
      case "Two":
        return Union1Two.fromJson(json);
    }
    throw StateError("Unknown variant for union Union1 ${json}");
  }
  T map<T>({
    required T Function(Union1One one) one,
    required T Function(Union1Two two) two,
  }) {
    final v = this;
    if (v is Union1One) {
      return one(v);
    } else if (v is Union1Two) {
      return two(v);
    }
    throw StateError("Unknown variant for union Union1 ${this}");
  }

  T mapMaybe<T>({
    required T Function(Union1 union1) orElse,
    T Function(Union1One one)? one,
    T Function(Union1Two two)? two,
  }) {
    final v = this;
    if (v is Union1One) {
      return (one ?? orElse)(v);
    } else if (v is Union1Two) {
      return (two ?? orElse)(v);
    }
    return orElse(v);
  }
}
