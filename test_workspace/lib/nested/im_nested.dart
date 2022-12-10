import '../test-file.dart';
import '../other.dart';

void m() {
  Other;
  func(G());
}

// snippet-define:ps
final d = "c";

// snippet-define-end:ps

// snippet-define:bo
// final s = "s";
// final cc = 2;

// snippet-define-end:bo

// snippet-include:bo
// final s = "s";
// final cc = 2;

// snippet-include-end:bo



/// <!-- snippet-include:ps -->
/// ```dart
/// final d = "c";
/// 
/// ```
/// <!-- snippet-include-end:ps -->
///
///
///
void m1() {}

/// <!-- snippet-define:comm -->
/// ```dart
/// final d = "d";
/// ```
/// <!-- snippet-define-end:comm -->
///
///
/// <!-- snippet-include:comm -->
/// ```dart
/// final d = "d";
/// ```
/// <!-- snippet-include-end:comm -->
///
///
///
/// Other
void m2() {}
