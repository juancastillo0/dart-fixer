[![Code coverage Coveralls](https://coveralls.io/repos/github/juancastillo0/dart-fixer/badge.svg?branch=main)](https://coveralls.io/github/juancastillo0/dart-fixer?branch=main)
[![Code coverage Codecov](https://codecov.io/gh/juancastillo0/dart-fixer/branch/main/graph/badge.svg?token=QJLQSCIJ42)](https://codecov.io/gh/juancastillo0/dart-fixer)
[![CI tests](https://github.com/juancastillo0/dart-fixer/actions/workflows/ci.yaml/badge.svg)](https://github.com/juancastillo0/dart-fixer/actions/workflows/ci.yaml)
[![dart-fixer is released under the MIT license.](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/juancastillo0/dart-fixer/blob/main/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

# dart-fixer VSCode Extension and Libraries

This extension provides various utilities for working with Dart models, [JSON schemas](https://json-schema.org), [JSON type definitions](https://jsontypedef.com), and Dart or Markdown documentation.

# Table of Contents

- [dart-fixer VSCode Extension and Libraries](#dart-fixer-vscode-extension-and-libraries)
- [Table of Contents](#table-of-contents)
- [Example Workspace](#example-workspace)
- [Features](#features)
  - [Dart models, JSON Schema and JSON Type Definition](#dart-models-json-schema-and-json-type-definition)
    - [Model mappings](#model-mappings)
    - [JSON Schema vs JSON Type Definition](#json-schema-vs-json-type-definition)
  - [Documentation and example snippet synchronization](#documentation-and-example-snippet-synchronization)
    - [Markdown and Dart documentation comments](#markdown-and-dart-documentation-comments)
    - [Dart code](#dart-code)
  - [Dart model utilities generation](#dart-model-utilities-generation)
    - [fromJson factory](#fromjson-factory)
    - [toJson method](#tojson-method)
    - [equality operator and hashCode getter](#equality-operator-and-hashcode-getter)
    - [copyWith method](#copywith-method)
    - [toString method](#tostring-method)
    - [allFields getter](#allfields-getter)
    - [field enum](#field-enum)
    - [builder class](#builder-class)
- [Commands](#commands)
  - [Code Actions](#code-actions)
- [Requirements](#requirements)
- [Extension Settings](#extension-settings)
- [Known Issues](#known-issues)
- [Release Notes](#release-notes)
  - [1.0.0](#100)
- [Contributing](#contributing)
  - [Linting](#linting)
  - [Formatting](#formatting)
  - [Run Extension](#run-extension)
  - [Test Extension](#test-extension)
    - [Test Workspace](#test-workspace)
  - [Following extension guidelines](#following-extension-guidelines)

# Example Workspace

You may find the [test_workspace](./test_workspace/) useful for usage and configuration examples in a Dart project.

# Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Dart models, JSON Schema and JSON Type Definition

- Generates Dart classes from [JSON Schema](https://json-schema.org/) or [JSON Type Definition](https://jsontypedef.com/) files.
- Generates JSON Schema or JSON Type Definition files from Dart classes.

You may generate Dart classes or JSON schemas by using [commands](#commands) or with the [Model mappings configuration](#model-mappings).

### Model mappings

A model mapping configuration specifies the input and output paths and the type of files (JSON schemas, Dart classes) that the code generation should parse and generate.

### JSON Schema vs JSON Type Definition

We support both types of schema, as input or output of the extension. For a discussion on choosing one of the schema types you may visit https://ajv.js.org/guide/schema-language.html.

## Documentation and example snippet synchronization

This extension provides a way to keep code or documentation snippets synchronized automatically. This may be useful if you want to use the same documentation from you code in a Markdown (`.md`) file or you may what to use your test code as an example snippet in your code's documentation or README file (or any Markdown).

### Markdown and Dart documentation comments

You may define snippets with the `snippet-define` comment in a Markdown file:

```md
<!-- snippet-define:name -->
Documentation
<!-- snippet-define-end:name -->
```

Or inside Dart documentation comments:

```dart
/// <!-- snippet-define:name -->
/// Documentation
/// <!-- snippet-define-end:name -->
```

And include the snippets with an `<!-- snippet-include:name -->` html comment in Markdown files or in documentation comments in Dart files:

```dart
/// <!-- snippet-include:name -->
```

After generation the Dart comment will look like this, with the last two lines generated:

```dart
/// <!-- snippet-include:name -->
/// Documentation
/// <!-- snippet-include-end:name -->
```

### Dart code

You may also define snippets from Dart code:

```dart
// snippet-define:name
final value = functionCall();
expect(value.name, "SomeName");
// snippet-define-end:name
```

which will be included within "\`\`\`dart" code section in the Markdown:

```dart
/// <!-- snippet-include:name -->
/// ```dart
/// final value = functionCall();
/// expect(value.name, "SomeName");
/// ```
/// <!-- snippet-include-end:name -->
```

## Dart model utilities generation

Multiple utilities can be generated from Dart classes. These include utilities for serialization and de-serialization (toJson and fromJson), data class or equality/immutable methods (copyWith, equality, hashCode, Builder class), other utilities such as an enum and getter for all fields in the class.

When the generated code is out-of-date with the source code, the extension will show an error that can be fixed automatically with a code action.

The generated sections will be wrapped around comments:

```dart
// generated-dart-fixer-start{"md5Hash":"mfnSPzw24h0O/pBs92rMYw=="}
<generated-code>
// generated-dart-fixer-end{"md5Hash":"mfnSPzw24h0O/pBs92rMYw=="}
```

The `md5Hash` provides a way to identify whether the generated code is out-of-date. At the moment, if you change the generated code, the extension will not show an error, since the hash of the generated code has not changed. The extension will show an error only when the new generated code has a different hash than the one in the comment.

### fromJson factory

Generates a `Model.fromJson(Map json)` factory inside the class. The parameter type is a // TODO.

### toJson method

Generates a `Map<String, Object?> toJson()` method that returns a Dart `Map<String, Object?>` with json values.

### equality operator and hashCode getter

Generates a `bool operator ==(Object other)` and `int get hashCode` overrides for Dart equality checks.

### copyWith method

Generates a `Model copyWith({FieldType? fieldName, ...})` method that returns a new instance of the class with the fields overridden with the values passed as argument.

### toString method

Generates a `String toString()` method override that returns a String with all the field values.

### allFields getter

Generates a `List<Object?> get props` getter that returns the values for all fields.

### field enum

Generates a `enum ModelField` with all the fields in the class. The enum contains multiple fields and methods that have information about the field and its type.

### builder class

Generates a `class ModelBuilder` with utilities for editing and setting fields and creating new instances of the Model from the values. Can be used to create instances of `Model`, it's an alternative to the `copyWith` method.

# Commands

| Command                   | Description                                                      | Configuration                                    |
| ------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| findAllErrors             | Analyses all the code and shows all errors as vscode diagnostics | N/A                                              |
| fixAllErrors              | Fixes all errors found by this extension                         | N/A                                              |
| dartModelFromJTD          | Generates a Dart file from a JSON Type Definition file           | The default generator configuration will be used |
| dartModelFromJsonSchema   | Generates a Dart file from a JSON Schema file                    | The default generator configuration will be used |
| dartModelFromJsonDocument | Generates a Dart file from a JSON Type Definition file           | The default generator configuration will be used |

## Code Actions

For all error diagnostics we provide a Quick Fix Code Action. You can fix them individually using the vscode interface or with the `fixAllErrors` command.

A code action will appear por JSON documents, for which you can generate Dart classes, similar to the commands. The extension of the JSON file will determine the type of schema that will be parsed: JSON Schema (`.schema.json`), JSON Type Definition (`.jtd.json`) or a JSON document (`.json`) with an instance of the class.

# Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

# Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

# Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

# Release Notes

## 1.0.0

Initial release of ...
Fixed issue #.
Added features X, Y, and Z.

---

# Contributing

Fork the repository and install the packages:

```bash
npm i
```

## Linting

We use ESLint for static analysis of the code. You may want to install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension for vscode.

The `npm run eslint` command (run in CI) will execute the ESLint static analysis verification.

## Formatting

We use Prettier for formatting the code. You may want to install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for vscode.

The `npm run prettier` command will fix the formatting issues.

The `npm run prettier-check` command (run in CI) will execute the prettier verification.

## Run Extension

You may run the `Run Extension` vscode task set up in the `launch.json` configuration. This will open a new window with the extension running. If you make changes to the extension source code, you will need to reload the opened Extension Development Host vscode window for it to use the new implementation.

## Test Extension

You may run the vscode tasks in the `launch.json` configuration.

- `Extension Test` for the vscode extension integration tests.
- `mocha test` for tests that do not require the vscode library to run. 
You may have to configure your node.js path with the `mochaExplorer.nodePath` if using the [Mocha Test Explorer extension](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter).

### Test Workspace

There is a test workspace in the [test_workspace](./test_workspace/) directory featuring a Dart package with some use cases for the extension. You may run the extension and test the features manually by opening this folder in the new Extension Development Host vscode window.

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

**Enjoy!**



    "keybindings": [
      {
        "command": "dart-fixer.helloWorld",
        "key": "ctrl+.",
        "mac": "cmd+.",
        "when": "editorTextFocus && editorLangId == dart"
      }
    ],