// generated-dart-fixer-json{"from":"./schema-1.jtd.json","kind":"typeDefinition","md5Hash":"80mpHhPSdzZnZTZTZxI2DA=="}

class Schema1 {
  final String id;
  final DateTime createdAt;
  final int karma;
  final bool? isAdmin;
  final String? op;

  const Schema1({
    required this.id,
    required this.createdAt,
    required this.karma,
    this.isAdmin,
    this.op,
  });
// generated-dart-fixer-start{"md5Hash":"8WqOkYUHNuGyHZzhBgONVw=="}

  factory Schema1.fromJson(Map json) {
    return Schema1(
      id: json["id"] as String,
      createdAt: DateTime.parse(json["createdAt"] as String),
      karma: json["karma"] as int,
      isAdmin: json["isAdmin"] as bool?,
      op: json["op"] as String?,
    );
  }

  Map<String, Object?> toJson() {
    return {
      "id": id,
      "createdAt": createdAt.toIso8601String(),
      "karma": karma,
      "isAdmin": isAdmin,
      "op": op,
    };
  }

  Schema1 copyWith({
    String? id,
    DateTime? createdAt,
    int? karma,
    bool? isAdmin,
    bool isAdminToNull = false,
    String? op,
    bool opToNull = false,
  }) {
    return Schema1(
      id: id ?? this.id,
      createdAt: createdAt ?? this.createdAt,
      karma: karma ?? this.karma,
      isAdmin: isAdmin ?? (isAdminToNull ? null : this.isAdmin),
      op: op ?? (opToNull ? null : this.op),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Schema1 &&
            other.runtimeType == runtimeType &&
            other.id == id &&
            other.createdAt == createdAt &&
            other.karma == karma &&
            other.isAdmin == isAdmin &&
            other.op == op;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      id,
      createdAt,
      karma,
      isAdmin,
      op,
    ]);
  }

  @override
  String toString() {
    return "Schema1${{
      "id": id,
      "createdAt": createdAt,
      "karma": karma,
      "isAdmin": isAdmin,
      "op": op,
    }}";
  }

  List<Object?> get props => [
        id,
        createdAt,
        karma,
        isAdmin,
        op,
      ];
}

enum Schema1Field {
  id(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  createdAt(
    "DateTime",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  karma(
    "int",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
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
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Schema1 object) {
    switch (this) {
      case Schema1Field.id:
        return object.id;
      case Schema1Field.createdAt:
        return object.createdAt;
      case Schema1Field.karma:
        return object.karma;
      case Schema1Field.isAdmin:
        return object.isAdmin;
      case Schema1Field.op:
        return object.op;
    }
  }

  const Schema1Field(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class Schema1Builder {
  bool idIsSet = false;
  String? _id;
  String? get id => _id;
  set id(String? newValue) {
    _id = newValue;
    idIsSet = true;
  }

  Schema1Builder idSet(String newValue) {
    id = newValue;
    return this;
  }

  bool createdAtIsSet = false;
  DateTime? _createdAt;
  DateTime? get createdAt => _createdAt;
  set createdAt(DateTime? newValue) {
    _createdAt = newValue;
    createdAtIsSet = true;
  }

  Schema1Builder createdAtSet(DateTime newValue) {
    createdAt = newValue;
    return this;
  }

  bool karmaIsSet = false;
  int? _karma;
  int? get karma => _karma;
  set karma(int? newValue) {
    _karma = newValue;
    karmaIsSet = true;
  }

  Schema1Builder karmaSet(int newValue) {
    karma = newValue;
    return this;
  }

  bool isAdminIsSet = false;
  bool? _isAdmin;
  bool? get isAdmin => _isAdmin;
  set isAdmin(bool? newValue) {
    _isAdmin = newValue;
    isAdminIsSet = true;
  }

  Schema1Builder isAdminSet(bool? newValue) {
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

  Schema1Builder opSet(String? newValue) {
    op = newValue;
    return this;
  }

  bool get isValidValue {
    return id != null && createdAt != null && karma != null;
  }

  Schema1? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Schema1(
      id: id as String,
      createdAt: createdAt as DateTime,
      karma: karma as int,
      isAdmin: isAdmin,
      op: op,
    );
  }

  Schema1Builder apply(Schema1Builder other) {
    if (other.idIsSet) {
      id = other.id;
    }
    if (other.createdAtIsSet) {
      createdAt = other.createdAt;
    }
    if (other.karmaIsSet) {
      karma = other.karma;
    }
    if (other.isAdminIsSet) {
      isAdmin = other.isAdmin;
    }
    if (other.opIsSet) {
      op = other.op;
    }

    return this;
  }

  Schema1Builder clone() => Schema1Builder().apply(this);
  Schema1Builder copyWith(Schema1Builder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"8WqOkYUHNuGyHZzhBgONVw=="}

