class User {
  final String? name;
  final int? id;
  final List<String> values3;

  const User({
    required this.name,
    required this.id,
    required this.values3,
  });

// generated-dart-fixer-start{"md5Hash":"X93ULCvZleKZw2Uu68j6Eg=="}

  factory User.fromJson(Map json) {
    return User(
      name: json["name"] as String?,
      id: json["id"] as int?,
      values3: (json["values3"] as Iterable).map((v) => v as String).toList(),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "name": name,
      "id": id,
      "values3": values3,
    };
  }

  User copyWith({
    String? name,
    bool nameToNull = false,
    int? id,
    bool idToNull = false,
    List<String>? values3,
  }) {
    return User(
      name: name ?? (nameToNull ? null : this.name),
      id: id ?? (idToNull ? null : this.id),
      values3: values3 ?? this.values3,
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is User &&
            other.runtimeType == runtimeType &&
            other.name == name &&
            other.id == id &&
            other.values3 == values3;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      name,
      id,
      values3,
    ]);
  }

  @override
  String toString() {
    return "User${{
      "name": name,
      "id": id,
      "values3": values3,
    }}";
  }

  List<Object?> get allFields => [
        name,
        id,
        values3,
      ];
}

enum UserFields {
  name(
    "String?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  id(
    "int?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  values3(
    "List<String>",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(User object) {
    switch (this) {
      case UserFields.name:
        return object.name;
      case UserFields.id:
        return object.id;
      case UserFields.values3:
        return object.values3;
    }
  }

  const UserFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class UserBuilder {
  bool nameIsSet = false;
  String? _name;
  String? get name => _name;
  set name(String? newValue) {
    _name = newValue;
    nameIsSet = true;
  }

  UserBuilder nameSet(String? newValue) {
    name = newValue;
    return this;
  }

  bool idIsSet = false;
  int? _id;
  int? get id => _id;
  set id(int? newValue) {
    _id = newValue;
    idIsSet = true;
  }

  UserBuilder idSet(int? newValue) {
    id = newValue;
    return this;
  }

  bool values3IsSet = false;
  List<String>? _values3;
  List<String>? get values3 => _values3;
  set values3(List<String>? newValue) {
    _values3 = newValue;
    values3IsSet = true;
  }

  UserBuilder values3Set(List<String> newValue) {
    values3 = newValue;
    return this;
  }

  bool get isValidValue {
    return values3 != null;
  }

  User? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return User(
      name: name,
      id: id,
      values3: values3 as List<String>,
    );
  }

  UserBuilder apply(UserBuilder other) {
    if (other.nameIsSet) {
      name = other.name;
    }
    if (other.idIsSet) {
      id = other.id;
    }
    if (other.values3IsSet) {
      values3 = other.values3;
    }

    return this;
  }

  UserBuilder clone() => UserBuilder().apply(this);
  UserBuilder copyWith(UserBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"X93ULCvZleKZw2Uu68j6Eg=="}
