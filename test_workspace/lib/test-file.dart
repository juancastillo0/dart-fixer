import 'dart:convert' as convert;
import 'dart:collection';

import 'package:test_workspace/other.dart';

export

    ///
    'dart:async';

export 'dart:io' //
    hide
        Directory;

export 'dart:collection'
    show
        LinkedHashSet, //
        HashSet;

export 'dart:collection' //
    show
        HashMap;

export 'dart:convert' show JsonCodec, Utf8Codec hide AsciiCodec;

// final str = '''
// String? func2() {
// }
// ''';

class B extends Other {
  final int? v;
  final String value;

  B({
    this.v = 3,
    super.md = const [],
    required this.value,
  }) : super(po2: "");

  /// comm
  const B.named({
    ///
    this.v = 3,
    //
    required List super.md,
    this.value = """dd""",
  }) : super(po2: "po2");

  factory B.factNamed(
    int v, [
    List<dynamic>? md,
    String? value = null,
    //
  ]) =>
      B(value: value ?? '');

  const factory B.constFactNamed(
    int v,
    String value, [
    List<String>? md,
  ]) = BOther //
  ;
}

class BOther implements B {
  const BOther(
    this.v,
    this.value, [
    List<String>? md,
  ]) : md = md ?? const [];

  @override
  final List<String> md;
  @override
  final int? v;
  @override
  final String value;

  @override
  String get po2 => throw UnimplementedError();

  @override
  String? get pos => throw UnimplementedError();

  @override
  List<Object?> get props => throw UnimplementedError();

  @override
  Other copyWith({List? md, String? po2, String? pos, bool posToNull = false}) {
    // TODO: implement copyWith
    throw UnimplementedError();
  }

  @override
  Map<String, Object?> toJson() {
    // TODO: implement toJson
    throw UnimplementedError();
  }
}

class G<T extends B?> {}

String func(G<B?> d) {
  Other;
  SplayTreeMap();
  DateTime(20).toIso8601String();
  Duration(microseconds: 2).inMicroseconds;
  return convert.jsonDecode('{}');
}
