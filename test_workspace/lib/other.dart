mixin PM {}

extension Ext on PM {}

mixin PMM on PM {}

class Another with PM, PMM {}

abstract class BaseI {}

class BaseC<T> {}

extension ExtGeneric<V> on BaseC<V> {}

class C extends BaseC<int> with PM implements BaseI {}

mixin PMO<P extends Another, K extends BaseC<String?>> on Another {}

class D = Another with PMO<Another, BaseC<String?>>;

class Other {
  final List md;
  final String po2;
  final String? pos;

  const Other({
    required this.md,
    required this.po2,
    this.pos,
  });

// generated-dart-fixer-start{"md5Hash":"i9bbI40s8FJk8QOG9VJSqA=="}

  factory Other.fromJson(Map json) {
    return Other(
      md: (json["md"] as Iterable).map((v) => v).toList(),
      po2: json["po2"] as String,
      pos: json["pos"] as String?,
    );
  }

  Map<String, Object?> toJson() {
    return {
      "md": md,
      "po2": po2,
      "pos": pos,
    };
  }

  Other copyWith({
    List? md,
    String? po2,
    String? pos,
    bool posToNull = false,
  }) {
    return Other(
      md: md ?? this.md,
      po2: po2 ?? this.po2,
      pos: pos ?? (posToNull ? null : this.pos),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Other &&
            other.runtimeType == runtimeType &&
            other.md == md &&
            other.po2 == po2 &&
            other.pos == pos;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      md,
      po2,
      pos,
    ]);
  }

  @override
  String toString() {
    return "Other${{
      "md": md,
      "po2": po2,
      "pos": pos,
    }}";
  }

  List<Object?> get props => [
        md,
        po2,
        pos,
      ];
}

enum OtherField {
  md(
    "List",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  po2(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  pos(
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

  Object? get(Other object) {
    switch (this) {
      case OtherField.md:
        return object.md;
      case OtherField.po2:
        return object.po2;
      case OtherField.pos:
        return object.pos;
    }
  }

  const OtherField(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class OtherBuilder {
  bool mdIsSet = false;
  List? _md;
  List? get md => _md;
  set md(List? newValue) {
    _md = newValue;
    mdIsSet = true;
  }

  OtherBuilder mdSet(List newValue) {
    md = newValue;
    return this;
  }

  bool po2IsSet = false;
  String? _po2;
  String? get po2 => _po2;
  set po2(String? newValue) {
    _po2 = newValue;
    po2IsSet = true;
  }

  OtherBuilder po2Set(String newValue) {
    po2 = newValue;
    return this;
  }

  bool posIsSet = false;
  String? _pos;
  String? get pos => _pos;
  set pos(String? newValue) {
    _pos = newValue;
    posIsSet = true;
  }

  OtherBuilder posSet(String? newValue) {
    pos = newValue;
    return this;
  }

  bool get isValidValue {
    return md != null && po2 != null;
  }

  Other? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Other(
      md: md as List,
      po2: po2 as String,
      pos: pos,
    );
  }

  OtherBuilder apply(OtherBuilder other) {
    if (other.mdIsSet) {
      md = other.md;
    }
    if (other.po2IsSet) {
      po2 = other.po2;
    }
    if (other.posIsSet) {
      pos = other.pos;
    }

    return this;
  }

  OtherBuilder clone() => OtherBuilder().apply(this);
  OtherBuilder copyWith(OtherBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"i9bbI40s8FJk8QOG9VJSqA=="}
