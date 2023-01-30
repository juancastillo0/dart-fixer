// generated-dart-fixer-json{"from":"./user.schema.json","kind":"schema","md5Hash":"4FQALcv9J/FJfqWJOqlCWw=="}

class User {
  final String? name;
  final int? id;
  final List<String> values3;

  const User({
    this.name,
    this.id,
    required this.values3,
  });
// generated-dart-fixer-start{"md5Hash":"DSd3DIghQKlPr/qW+3hHhw=="}

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

  List<Object?> get props => [
        name,
        id,
        values3,
      ];
}

enum UserField {
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
      case UserField.name:
        return object.name;
      case UserField.id:
        return object.id;
      case UserField.values3:
        return object.values3;
    }
  }

  const UserField(
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

// generated-dart-fixer-end{"md5Hash":"DSd3DIghQKlPr/qW+3hHhw=="}

class UserBuilder2 {
  final bool nameIsSet;
  final bool idIsSet;
  final bool values3IsSet;

  const UserBuilder2({
    required this.nameIsSet,
    required this.idIsSet,
    required this.values3IsSet,
  });

// generated-dart-fixer-start{"md5Hash":"0Be38O1j1RQDLblW2vr/ag=="}

  factory UserBuilder2.fromJson(Map json) {
    return UserBuilder2(
      nameIsSet: json["nameIsSet"] as bool,
      idIsSet: json["idIsSet"] as bool,
      values3IsSet: json["values3IsSet"] as bool,
    );
  }

  Map<String, Object?> toJson() {
    return {
      "nameIsSet": nameIsSet,
      "idIsSet": idIsSet,
      "values3IsSet": values3IsSet,
    };
  }

  UserBuilder2 copyWith({
    bool? nameIsSet,
    bool? idIsSet,
    bool? values3IsSet,
  }) {
    return UserBuilder2(
      nameIsSet: nameIsSet ?? this.nameIsSet,
      idIsSet: idIsSet ?? this.idIsSet,
      values3IsSet: values3IsSet ?? this.values3IsSet,
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is UserBuilder2 &&
            other.runtimeType == runtimeType &&
            other.nameIsSet == nameIsSet &&
            other.idIsSet == idIsSet &&
            other.values3IsSet == values3IsSet;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      nameIsSet,
      idIsSet,
      values3IsSet,
    ]);
  }

  @override
  String toString() {
    return "UserBuilder2${{
      "nameIsSet": nameIsSet,
      "idIsSet": idIsSet,
      "values3IsSet": values3IsSet,
    }}";
  }

  List<Object?> get props => [
        nameIsSet,
        idIsSet,
        values3IsSet,
      ];
}

enum UserBuilder2Field {
  nameIsSet(
    "bool",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  idIsSet(
    "bool",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  values3IsSet(
    "bool",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(UserBuilder2 object) {
    switch (this) {
      case UserBuilder2Field.nameIsSet:
        return object.nameIsSet;
      case UserBuilder2Field.idIsSet:
        return object.idIsSet;
      case UserBuilder2Field.values3IsSet:
        return object.values3IsSet;
    }
  }

  const UserBuilder2Field(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class UserBuilder2Builder {
  bool nameIsSetIsSet = false;
  bool? _nameIsSet;
  bool? get nameIsSet => _nameIsSet;
  set nameIsSet(bool? newValue) {
    _nameIsSet = newValue;
    nameIsSetIsSet = true;
  }

  UserBuilder2Builder nameIsSetSet(bool newValue) {
    nameIsSet = newValue;
    return this;
  }

  bool idIsSetIsSet = false;
  bool? _idIsSet;
  bool? get idIsSet => _idIsSet;
  set idIsSet(bool? newValue) {
    _idIsSet = newValue;
    idIsSetIsSet = true;
  }

  UserBuilder2Builder idIsSetSet(bool newValue) {
    idIsSet = newValue;
    return this;
  }

  bool values3IsSetIsSet = false;
  bool? _values3IsSet;
  bool? get values3IsSet => _values3IsSet;
  set values3IsSet(bool? newValue) {
    _values3IsSet = newValue;
    values3IsSetIsSet = true;
  }

  UserBuilder2Builder values3IsSetSet(bool newValue) {
    values3IsSet = newValue;
    return this;
  }

  bool get isValidValue {
    return nameIsSet != null && idIsSet != null && values3IsSet != null;
  }

  UserBuilder2? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return UserBuilder2(
      nameIsSet: nameIsSet as bool,
      idIsSet: idIsSet as bool,
      values3IsSet: values3IsSet as bool,
    );
  }

  UserBuilder2Builder apply(UserBuilder2Builder other) {
    if (other.nameIsSetIsSet) {
      nameIsSet = other.nameIsSet;
    }
    if (other.idIsSetIsSet) {
      idIsSet = other.idIsSet;
    }
    if (other.values3IsSetIsSet) {
      values3IsSet = other.values3IsSet;
    }

    return this;
  }

  UserBuilder2Builder clone() => UserBuilder2Builder().apply(this);
  UserBuilder2Builder copyWith(UserBuilder2Builder other) =>
      clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"0Be38O1j1RQDLblW2vr/ag=="}
enum UserField2 {
  name("name"),
  id("id"),
  values3("values3");

  final String value;
  const UserField2(this.value);
  factory UserField2.fromJson(Object? json) =>
      values.firstWhere((v) => v.value == json);
  String toJson() => value;
}
