// generated-dart-fixer-json{"from":"./event.schema.yaml","kind":"schema","md5Hash":"FohgKyEDZjHKGdqXNIn5aw==","generatorConfig":"noBuilder"}

class Event {
  final String name;
  final DateTime? date;

  const Event({
    required this.name,
    this.date,
  });
// generated-dart-fixer-start{"md5Hash":"nA3/YbfbV2wwO8mi1rQraQ=="}

  factory Event.fromJson(Map json) {
    return Event(
      name: json["name"] as String,
      date:
          json["date"] == null ? null : DateTime.parse(json["date"] as String),
    );
  }

  Map<String, Object?> toJson() {
    return {
      "name": name,
      "date": date?.toIso8601String(),
    };
  }

  Event copyWith({
    String? name,
    DateTime? date,
    bool dateToNull = false,
  }) {
    return Event(
      name: name ?? this.name,
      date: date ?? (dateToNull ? null : this.date),
    );
  }

  @override
  bool operator ==(Object other) {
    return identical(other, this) ||
        other is Event &&
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
    return "Event${{
      "name": name,
      "date": date,
    }}";
  }

  List<Object?> get props => [
        name,
        date,
      ];
}

enum EventField {
  name(
    "String",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  ),
  date(
    "DateTime?",
    isFinal: true,
    isVariable: false,
    defaultValue: null,
  );

  final String type;
  final bool isFinal;
  final bool isVariable;
  final Object? defaultValue;

  bool get isNullable => type.endsWith("?");

  Object? get(Event object) {
    switch (this) {
      case EventField.name:
        return object.name;
      case EventField.date:
        return object.date;
    }
  }

  const EventField(
    this.type, {
    required this.isFinal,
    required this.isVariable,
    this.defaultValue,
  });
}

// generated-dart-fixer-end{"md5Hash":"nA3/YbfbV2wwO8mi1rQraQ=="}

// generated-dart-fixer-json{"from":"./calendar.schema.yaml","kind":"schema","md5Hash":"jRJ9h71fvyx3iFV5Rqg1ZQ==","generatorConfig":"noBuilder"}

class Calendar {
  final String name;
  final double? date;

  const Calendar({
    required this.name,
    this.date,
  });
// generated-dart-fixer-start{"md5Hash":"HeY8MWmriEHeazzlezQmuQ=="}

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

// generated-dart-fixer-end{"md5Hash":"HeY8MWmriEHeazzlezQmuQ=="}

