import { parseClassesAntlr } from "../antlr/antlr-parser";

suite("Antlr", () => {
  test("Dart Function", () => {
    const text = `
final str = '''
String? func2() {
}
''';

class B extends Other {
  final int? v;
  final String value;

  B({
    this.v = 3,
    super.md = const [],
    required this.value,
  });

  bool get isVNull => v == null;

  int valueLength({bool? sum}) => value.length;
  Map<String , List<int? >> valueLengthReq(
    Object v, { required bool? sum}) =>{}
    ;

  set isVNull(bool newValue) {}

  static compare<N extends num>(B self, [List<N>  def = const [2 ,]]) => self.isVNull;

  static int? compareInt([B? self]) => self?.v;
}

final str2 = '''
  String? func2() {
  }
''';

class G<T extends B?> {}

String func(G<B?> d) {
  return jsonDecode('{}');
}   
`;
    const classes = parseClassesAntlr(text);

    console.log(classes);
  });
});
