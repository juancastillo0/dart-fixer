import { AjvJTDSchemaType, compileCustomValidator } from "../utils";

export interface GenerationOptions {
  /** Generates a `Model.fromJson(Map json)` factory inside the class. */
  fromJson?: {
    /** The name of the constructor factory.
     * @default "fromJson" */
    constructorName?: string;
    /** The parameter type for the constructor.
     * @default "Map" */
    parameterType?: "Object?" | "dynamic" | "Map" | "Map<String, Object?>";
    /** You may put Dart comments or annotations for the factory */
    metadata?: string;
  };
  /** Generates a `Map<String, Object?> toJson()` method that
   * returns a dart `Map<String, Object?>` with json values. */
  toJson?: {
    /** Whether call the `toJson` method for nested values. */
    nested?: boolean;
    /** You may put Dart comments or annotations for the method */
    metadata?: string;
  };
  /** Generates a `bool operator ==(Object other)` and `int get hashCode` overrides
   * for dart equality checks. */
  equality?: {
    /** Whether to use a custom equals method instead of Dart's `==` operator for
     * the comparison of the fields.
     * For example, if using `package:collection` you could set it
     * to "const DeepCollectionEquality().equals" for deep equality */
    equalsMethod?: string;
    /** Whether to use a custom hash method instead of Dart's `.hashCode` getter for
     * the hashCode of the class.
     * For example, if using `package:collection` you could set it
     * to "const DeepCollectionEquality().hash" for deep equality */
    hashMethod?: string;
    /** A custom import for the `equalsMethod`.
     * For example, if using `import "package:collection:collection.dart";` for deep equality */
    customImport?: string;
    /** Whether to use `package:collection`'s deep equality methods */
    deep?: boolean;
  };
  /** Generates a `Model copyWith(...fields)` method */
  copyWith?: {
    /** You may put Dart comments or annotations for the method */
    metadata?: string;
  };
  /** Generates a `String toString()` method override that returns a String
   * with all the field values. */
  toStringOverride?: {
    /** You may put Dart comments or annotations for the method */
    metadata?: string;
  };
  /** Generates a `List<Object?> get props` getter that returns the values for all fields. */
  allFieldsGetter?: {
    /** The name of the getter.
     * @default "props" */
    name?: string;
    /** You may put Dart comments or annotations for the getter */
    metadata?: string;
  };
  /** Generates a `enum ModelField` with all the fields in the class.
   * The enum contains multiple fields and methods that have information about the field and its type. */
  allFieldsEnum?: {
    /** The name for the Fields enum. You may use "{{name}}" as a variable inside the template
     * that will be replaced with the name of the model.
     * @default "{{name}}Field" */
    nameTemplate?: string;
    /** You may put Dart comments or annotations for the enum */
    metadata?: string;
  };
  /** Generates a `class ModelBuilder` with utilities for editing and setting fields and
   * creating new instances of the Model from the values. Can be used to create instances of `Model`.
   * It's an alternative to the `copyWith` method. */
  builder?: {
    /** The name for the Builder class. You may use "{{name}}" as a variable inside the template
     * that will be replaced with the name of the model.
     * @default "{{name}}Builder" */
    nameTemplate?: string;
    /** You may put Dart comments or annotations for the class */
    metadata?: string;
  };
  /** Generates a `class ModelObservable` with utilities for subscribing to changes in a mutable
   * model creating new instances of the Model from the values. Can be used to create instances of `Model`.
   * Can be used with the mobx library's `Observable` or with Flutter's `ValueNotifier`. */
  observable?: {
    /** The name for the Observable class. You may use "{{name}}" as a variable inside the template
     * that will be replaced with the name of the model.
     * @default "{{name}}Observable" */
    nameTemplate?: string;
    /** The name of the reactivity class for example.
     * For example "Observable" for mobx. */
    reactivityClass: string;
    /** Whether to use custom reactivity classes for collections.
     * For example, mobx's ObservableList, ObservableMap and ObservableSet.
     * @default true */
    // TODO: implement GenerationOptions.observable.collectionsReactivityClass
    collectionsReactivityClass?: boolean;
    /** Whether to pass `this`, the observable instance, to the constructor of the reactivity class
     * @default false */
    passThisToConstructor?: boolean;
    /** An import needed to use the reactivity class */
    customImport: string;
    /** You may put Dart comments or annotations for the class */
    metadata?: string;
  };
}

export const generationOptionsSchema: AjvJTDSchemaType<GenerationOptions> = {
  metadata: {
    title: "GenerationOptions"
  },
  optionalProperties: {
    toJson: {
      optionalProperties: {
        nested: { type: "boolean" },
        metadata: { type: "string" },
      },
    },
    fromJson: {
      optionalProperties: {
        constructorName: { type: "string" },
        metadata: { type: "string" },
        parameterType: {
          enum: ["Object?", "dynamic", "Map", "Map<String, Object?>"],
        },
      },
    },
    equality: {
      optionalProperties: {
        equalsMethod: { type: "string" },
        hashMethod: { type: "string" },
        customImport: { type: "string" },
        deep: { type: "boolean" },
      },
    },
    copyWith: {
      optionalProperties: {
        metadata: { type: "string" },
      },
    },
    toStringOverride: {
      optionalProperties: {
        metadata: { type: "string" },
      },
    },
    allFieldsGetter: {
      optionalProperties: {
        name: { type: "string" },
        metadata: { type: "string" },
      },
    },
    allFieldsEnum: {
      optionalProperties: {
        nameTemplate: { type: "string" },
        metadata: { type: "string" },
      },
    },
    builder: {
      optionalProperties: {
        nameTemplate: { type: "string" },
        metadata: { type: "string" },
      },
    },
    observable: {
      properties: {
        reactivityClass: { type: "string" },
        customImport: { type: "string" },
      },
      optionalProperties: {
        nameTemplate: { type: "string" },
        collectionsReactivityClass: { type: "boolean" },
        passThisToConstructor: { type: "boolean" },
        metadata: { type: "string" },
      },
    },
  },
};

export const generationOptionsValidate = compileCustomValidator(
  generationOptionsSchema
);
