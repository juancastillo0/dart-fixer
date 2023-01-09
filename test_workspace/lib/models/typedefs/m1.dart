// generated-dart-fixer-json{"from":"./m1.json","kind":"typeDefinition","md5Hash":"0B0CYiL9GZ65jwOUCrluuw=="}

class UnionOne extends Union {
  final String id;
  final Map<String, bool?> maps;

  const UnionOne({
    required this.id,
    required this.maps,
  });
// generated-dart-fixer-start{"md5Hash":"vVQ7l0lBLE56rzOtyYgIWQ=="}

  factory UnionOne.fromJson(Map json) {
    return UnionOne(
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

  UnionOne copyWith({
    String? id,
    Map<String, bool?>? maps,
  }) {
    return UnionOne(
      id: id ?? this.id,
      maps: maps ?? this.maps,
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is UnionOne &&
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
    return "UnionOne${{
      "id": id,
      "maps": maps,
    }}";
  }

  List<Object?> get props => [
        id,
        maps,
      ];
}

enum UnionOneField {
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

  Object? get(UnionOne object) {
    switch (this) {
      case UnionOneField.id:
        return object.id;
      case UnionOneField.maps:
        return object.maps;
    }
  }

  const UnionOneField(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class UnionOneBuilder {
  bool idIsSet = false;
  String? _id;
  String? get id => _id;
  set id(String? newValue) {
    _id = newValue;
    idIsSet = true;
  }

  UnionOneBuilder idSet(String newValue) {
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

  UnionOneBuilder mapsSet(Map<String, bool?> newValue) {
    maps = newValue;
    return this;
  }

  bool get isValidValue {
    return id != null && maps != null;
  }

  UnionOne? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return UnionOne(
      id: id as String,
      maps: maps as Map<String, bool?>,
    );
  }

  UnionOneBuilder apply(UnionOneBuilder other) {
    if (other.idIsSet) {
      id = other.id;
    }
    if (other.mapsIsSet) {
      maps = other.maps;
    }

    return this;
  }

  UnionOneBuilder clone() => UnionOneBuilder().apply(this);
  UnionOneBuilder copyWith(UnionOneBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"vVQ7l0lBLE56rzOtyYgIWQ=="}

class UnionTwo extends Union {
  final bool? isAdmin;
  final String? opt;
  final List<String>? list;

  const UnionTwo({
    this.isAdmin,
    this.opt,
    this.list,
  });
// generated-dart-fixer-start{"md5Hash":"iL0ZWwhL7iU35v7CfHZe8A=="}

  factory UnionTwo.fromJson(Map json) {
    return UnionTwo(
      isAdmin: json["isAdmin"] as bool?,
      opt: json["opt"] as String?,
      list: json["list"] == null
          ? null
          : (json["list"] as Iterable).map((v) => v as String).toList(),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "isAdmin": isAdmin,
      "opt": opt,
      "list": list,
    };
  }

  UnionTwo copyWith({
    bool? isAdmin,
    bool isAdminToNull = false,
    String? opt,
    bool optToNull = false,
    List<String>? list,
    bool listToNull = false,
  }) {
    return UnionTwo(
      isAdmin: isAdmin ?? (isAdminToNull ? null : this.isAdmin),
      opt: opt ?? (optToNull ? null : this.opt),
      list: list ?? (listToNull ? null : this.list),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is UnionTwo &&
            other.runtimeType == runtimeType &&
            other.isAdmin == isAdmin &&
            other.opt == opt &&
            other.list == list;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      isAdmin,
      opt,
      list,
    ]);
  }

  @override
  String toString() {
    return "UnionTwo${{
      "isAdmin": isAdmin,
      "opt": opt,
      "list": list,
    }}";
  }

  List<Object?> get props => [
        isAdmin,
        opt,
        list,
      ];
}

enum UnionTwoField {
  isAdmin(
    "bool?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  opt(
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

  Object? get(UnionTwo object) {
    switch (this) {
      case UnionTwoField.isAdmin:
        return object.isAdmin;
      case UnionTwoField.opt:
        return object.opt;
      case UnionTwoField.list:
        return object.list;
    }
  }

  const UnionTwoField(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class UnionTwoBuilder {
  bool isAdminIsSet = false;
  bool? _isAdmin;
  bool? get isAdmin => _isAdmin;
  set isAdmin(bool? newValue) {
    _isAdmin = newValue;
    isAdminIsSet = true;
  }

  UnionTwoBuilder isAdminSet(bool? newValue) {
    isAdmin = newValue;
    return this;
  }

  bool optIsSet = false;
  String? _opt;
  String? get opt => _opt;
  set opt(String? newValue) {
    _opt = newValue;
    optIsSet = true;
  }

  UnionTwoBuilder optSet(String? newValue) {
    opt = newValue;
    return this;
  }

  bool listIsSet = false;
  List<String>? _list;
  List<String>? get list => _list;
  set list(List<String>? newValue) {
    _list = newValue;
    listIsSet = true;
  }

  UnionTwoBuilder listSet(List<String>? newValue) {
    list = newValue;
    return this;
  }

  bool get isValidValue {
    return true;
  }

  UnionTwo tryToValue() {
    return UnionTwo(
      isAdmin: isAdmin,
      opt: opt,
      list: list,
    );
  }

  UnionTwoBuilder apply(UnionTwoBuilder other) {
    if (other.isAdminIsSet) {
      isAdmin = other.isAdmin;
    }
    if (other.optIsSet) {
      opt = other.opt;
    }
    if (other.listIsSet) {
      list = other.list;
    }

    return this;
  }

  UnionTwoBuilder clone() => UnionTwoBuilder().apply(this);
  UnionTwoBuilder copyWith(UnionTwoBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"iL0ZWwhL7iU35v7CfHZe8A=="}

class Union {
  const Union();

  const factory Union.one({
    required String id,
    required Map<String, bool?> maps,
  }) = UnionOne;

  const factory Union.two({
    bool? isAdmin,
    String? opt,
    List<String>? list,
  }) = UnionTwo;

  factory Union.fromJson(Map json) {
    switch (json["runtimeType"] as String) {
      case "One":
        return UnionOne.fromJson(json);
      case "Two":
        return UnionTwo.fromJson(json);
    }
    throw StateError("Unknown variant for union Union ${json}");
  }
  T map<T>({
    required T Function(UnionOne one) one,
    required T Function(UnionTwo two) two,
  }) {
    final v = this;
    if (v is UnionOne) {
      return one(v);
    } else if (v is UnionTwo) {
      return two(v);
    }
    throw StateError("Unknown variant for union Union ${this}");
  }

  T mapMaybe<T>({
    required T Function(Union union) orElse,
    T Function(UnionOne one)? one,
    T Function(UnionTwo two)? two,
  }) {
    final v = this;
    if (v is UnionOne) {
      return (one ?? orElse)(v);
    } else if (v is UnionTwo) {
      return (two ?? orElse)(v);
    }
    return orElse(v);
  }
}
