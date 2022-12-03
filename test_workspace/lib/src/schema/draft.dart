// generated from "./draft.schema.json"

class Other {
  final String? name;
  final List<Other>? friends;

  const Other({
    this.name,
    this.friends,
  });
// generated-dart-fixer-start{"md5Hash":"jUmQgcoQzQ9b3qzkrnqzMw=="}

  factory Other.fromJson(Map json) {
    return Other(
      name: json["name"] as String?,
      friends: json["friends"] == null
          ? null
          : (json["friends"] as Iterable)
              .map((v) => Other.fromJson((v as Map).cast()))
              .toList(),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "name": name,
      "friends": friends?.map((v) => v).toList(),
    };
  }

  Other copyWith({
    String? name,
    bool nameToNull = false,
    List<Other>? friends,
    bool friendsToNull = false,
  }) {
    return Other(
      name: name ?? (nameToNull ? null : this.name),
      friends: friends ?? (friendsToNull ? null : this.friends),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Other &&
            other.runtimeType == runtimeType &&
            other.name == name &&
            other.friends == friends;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      name,
      friends,
    ]);
  }

  @override
  String toString() {
    return "Other${{
      "name": name,
      "friends": friends,
    }}";
  }

  List<Object?> get allFields => [
        name,
        friends,
      ];
}

enum OtherFields {
  name(
    "String?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  friends(
    "List<Other>?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Other object) {
    switch (this) {
      case OtherFields.name:
        return object.name;
      case OtherFields.friends:
        return object.friends;
    }
  }

  const OtherFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class OtherBuilder {
  bool nameIsSet = false;
  String? _name;
  String? get name => _name;
  set name(String? newValue) {
    _name = newValue;
    nameIsSet = true;
  }

  OtherBuilder nameSet(String? newValue) {
    name = newValue;
    return this;
  }

  bool friendsIsSet = false;
  List<Other>? _friends;
  List<Other>? get friends => _friends;
  set friends(List<Other>? newValue) {
    _friends = newValue;
    friendsIsSet = true;
  }

  OtherBuilder friendsSet(List<Other>? newValue) {
    friends = newValue;
    return this;
  }

  bool get isValidValue {
    return true;
  }

  Other tryToValue() {
    return Other(
      name: name,
      friends: friends,
    );
  }

  OtherBuilder apply(OtherBuilder other) {
    if (other.nameIsSet) {
      name = other.name;
    }
    if (other.friendsIsSet) {
      friends = other.friends;
    }

    return this;
  }

  OtherBuilder clone() => OtherBuilder().apply(this);
  OtherBuilder copyWith(OtherBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"jUmQgcoQzQ9b3qzkrnqzMw=="}

class Draft {
  final double? de;
  final DraftEnNum? enNum;
  final DraftEn? en;

  const Draft({
    this.de,
    this.enNum,
    this.en,
  });
// generated-dart-fixer-start{"md5Hash":"CSemhVC8Q9DJEt9egWArJQ=="}

  factory Draft.fromJson(Map json) {
    return Draft(
      de: json["de"] as double?,
      enNum: json["enNum"] == null
          ? null
          : DraftEnNum.fromJson(json["enNum"] as Object?),
      en: json["en"] == null ? null : DraftEn.fromJson(json["en"] as Object?),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "de": de,
      "enNum": enNum,
      "en": en,
    };
  }

  Draft copyWith({
    double? de,
    bool deToNull = false,
    DraftEnNum? enNum,
    bool enNumToNull = false,
    DraftEn? en,
    bool enToNull = false,
  }) {
    return Draft(
      de: de ?? (deToNull ? null : this.de),
      enNum: enNum ?? (enNumToNull ? null : this.enNum),
      en: en ?? (enToNull ? null : this.en),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Draft &&
            other.runtimeType == runtimeType &&
            other.de == de &&
            other.enNum == enNum &&
            other.en == en;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      de,
      enNum,
      en,
    ]);
  }

  @override
  String toString() {
    return "Draft${{
      "de": de,
      "enNum": enNum,
      "en": en,
    }}";
  }

  List<Object?> get allFields => [
        de,
        enNum,
        en,
      ];
}

enum DraftFields {
  de(
    "double?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  enNum(
    "DraftEnNum?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  en(
    "DraftEn?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Draft object) {
    switch (this) {
      case DraftFields.de:
        return object.de;
      case DraftFields.enNum:
        return object.enNum;
      case DraftFields.en:
        return object.en;
    }
  }

  const DraftFields(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class DraftBuilder {
  bool deIsSet = false;
  double? _de;
  double? get de => _de;
  set de(double? newValue) {
    _de = newValue;
    deIsSet = true;
  }

  DraftBuilder deSet(double? newValue) {
    de = newValue;
    return this;
  }

  bool enNumIsSet = false;
  DraftEnNum? _enNum;
  DraftEnNum? get enNum => _enNum;
  set enNum(DraftEnNum? newValue) {
    _enNum = newValue;
    enNumIsSet = true;
  }

  DraftBuilder enNumSet(DraftEnNum? newValue) {
    enNum = newValue;
    return this;
  }

  bool enIsSet = false;
  DraftEn? _en;
  DraftEn? get en => _en;
  set en(DraftEn? newValue) {
    _en = newValue;
    enIsSet = true;
  }

  DraftBuilder enSet(DraftEn? newValue) {
    en = newValue;
    return this;
  }

  bool get isValidValue {
    return true;
  }

  Draft tryToValue() {
    return Draft(
      de: de,
      enNum: enNum,
      en: en,
    );
  }

  DraftBuilder apply(DraftBuilder other) {
    if (other.deIsSet) {
      de = other.de;
    }
    if (other.enNumIsSet) {
      enNum = other.enNum;
    }
    if (other.enIsSet) {
      en = other.en;
    }

    return this;
  }

  DraftBuilder clone() => DraftBuilder().apply(this);
  DraftBuilder copyWith(DraftBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"CSemhVC8Q9DJEt9egWArJQ=="}
enum DraftEnNum {
  $1(1),
  $2(2),
  $3(3);

  final double value;
  const DraftEnNum(this.value);
  factory DraftEnNum.fromJson(Object? json) =>
      values.firstWhere((v) => v.value == json);
  double toJson() => value;
}

enum DraftEn {
  $1("1"),
  $2("2"),
  $3("3");

  final String value;
  const DraftEn(this.value);
  factory DraftEn.fromJson(Object? json) =>
      values.firstWhere((v) => v.value == json);
  String toJson() => value;
}
