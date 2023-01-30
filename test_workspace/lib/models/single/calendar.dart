// generated-dart-fixer-json{"from":"./calendar.schema.yaml","kind":"schema","md5Hash":"CcjlsHj9iasQf1DRbcpU7g=="}

class Calendar {
  final String name;
  final double? date;

  const Calendar({
    required this.name,
    this.date,
  });
// generated-dart-fixer-start{"md5Hash":"yD/z4AQ8cq8ZYZRXxwXH5g=="}

  factory Calendar.fromJson(Map json) {
    return Calendar(
      name: json["name"] as String,
      date: json["date"] as double?,
    );
  }

  Map<String, Object?> toJson() {
    return {
      "name": name,
      "date": date,
    };
  }

  Calendar copyWith({
    String? name,
    double? date,
    bool dateToNull = false,
  }) {
    return Calendar(
      name: name ?? this.name,
      date: date ?? (dateToNull ? null : this.date),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Calendar &&
            other.runtimeType == runtimeType &&
            other.name == name &&
            other.date == date;
  }

  @override
  int get hashCode {
    return Object.hashAll([
      runtimeType,
      name,
      date,
    ]);
  }

  @override
  String toString() {
    return "Calendar${{
      "name": name,
      "date": date,
    }}";
  }

  List<Object?> get props => [
        name,
        date,
      ];
}

enum CalendarField {
  name(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  date(
    "double?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Calendar object) {
    switch (this) {
      case CalendarField.name:
        return object.name;
      case CalendarField.date:
        return object.date;
    }
  }

  const CalendarField(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

class CalendarBuilder {
  bool nameIsSet = false;
  String? _name;
  String? get name => _name;
  set name(String? newValue) {
    _name = newValue;
    nameIsSet = true;
  }

  CalendarBuilder nameSet(String newValue) {
    name = newValue;
    return this;
  }

  bool dateIsSet = false;
  double? _date;
  double? get date => _date;
  set date(double? newValue) {
    _date = newValue;
    dateIsSet = true;
  }

  CalendarBuilder dateSet(double? newValue) {
    date = newValue;
    return this;
  }

  bool get isValidValue {
    return name != null;
  }

  Calendar? tryToValue() {
    if (!isValidValue) {
      return null;
    }
    return Calendar(
      name: name as String,
      date: date,
    );
  }

  CalendarBuilder apply(CalendarBuilder other) {
    if (other.nameIsSet) {
      name = other.name;
    }
    if (other.dateIsSet) {
      date = other.date;
    }

    return this;
  }

  CalendarBuilder clone() => CalendarBuilder().apply(this);
  CalendarBuilder copyWith(CalendarBuilder other) => clone().apply(other);
}

// generated-dart-fixer-end{"md5Hash":"yD/z4AQ8cq8ZYZRXxwXH5g=="}

