import {
  assert,
  defaultInferenceFlags,
  getTargetLanguage,
  inferenceFlagNames,
  inferenceFlags,
  InputData,
  MultiFileRenderResult,
  Options,
  RunContext,
  SerializedRenderResult,
  StringTypeMapping,
  TargetLanguage,
  TypeBuilder,
} from "quicktype-core";
import { initTypeNames } from "quicktype-core/dist/attributes/TypeNames";
import { NonInferenceOptions } from "quicktype-core/dist/Run";
import {
  TypeGraph,
  removeIndirectionIntersections,
  noneToAny,
  optionalToNullable,
} from "quicktype-core/dist/TypeGraph";
import { flattenStrings } from "../rewrites/flatten-strings";
import { flattenUnions } from "../rewrites/flatten-unions";
import { inferMaps } from "../rewrites/infer-maps";
import { combineClasses } from "../rewrites/combine-classes";
import { expandStrings } from "../rewrites/expand-strings";
import { gatherNames } from "./gather-names";
import { makeTransformations } from "./make-transformations";
import { replaceObjectType } from "../rewrites/replace-object-types";
import { resolveIntersections } from "../rewrites/resolve-intersections";

// makeTransformations

interface GraphInputs {
  targetLanguage: TargetLanguage;
  stringTypeMapping: StringTypeMapping;
  conflateNumbers: boolean;
  typeBuilder: TypeBuilder;
}

const defaultOptions: NonInferenceOptions = {
  lang: "ts",
  inputData: new InputData(),
  alphabetizeProperties: false,
  allPropertiesOptional: false,
  fixedTopLevels: false,
  noRender: false,
  leadingComments: undefined,
  rendererOptions: {},
  indentation: undefined,
  outputFilename: "stdout",
  debugPrintGraph: false,
  checkProvenance: false,
  debugPrintReconstitution: false,
  debugPrintGatherNames: false,
  debugPrintTransformations: false,
  debugPrintTimes: false,
  debugPrintSchemaResolving: false,
};

export class Run implements RunContext {
  private readonly _options: Options;

  constructor(options: Partial<Options>) {
    // We must not overwrite defaults with undefined values, which
    // we sometimes get.
    this._options = Object.assign(
      {},
      defaultOptions,
      defaultInferenceFlags
    ) as Options;
    for (const k of Object.getOwnPropertyNames(options)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const v = (options as any)[k];
      if (v !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        (this._options as any)[k] = v;
      }
    }
  }

  get stringTypeMapping(): StringTypeMapping {
    const targetLanguage = getTargetLanguage(this._options.lang);
    const mapping = new Map(targetLanguage.stringTypeMapping);
    for (const flag of inferenceFlagNames) {
      const stringType = inferenceFlags[flag].stringType;
      if (!this._options[flag] && stringType !== undefined) {
        mapping.set(stringType, "string");
      }
    }
    return mapping;
  }

  get debugPrintReconstitution(): boolean {
    return this._options.debugPrintReconstitution === true;
  }

  get debugPrintTransformations(): boolean {
    return this._options.debugPrintTransformations;
  }

  get debugPrintSchemaResolving(): boolean {
    return this._options.debugPrintSchemaResolving;
  }

  async timeSync<T>(name: string, f: () => Promise<T>): Promise<T> {
    const start = Date.now();
    const result = await f();
    const end = Date.now();
    if (this._options.debugPrintTimes) {
      console.log(`${name} took ${end - start}ms`);
    }
    return result;
  }

  time<T>(name: string, f: () => T): T {
    const start = Date.now();
    const result = f();
    const end = Date.now();
    if (this._options.debugPrintTimes) {
      console.log(`${name} took ${end - start}ms`);
    }
    return result;
  }

  private makeGraphInputs(): GraphInputs {
    const targetLanguage = getTargetLanguage(this._options.lang);
    const stringTypeMapping = this.stringTypeMapping;
    const conflateNumbers = !targetLanguage.supportsUnionsWithBothNumberTypes;
    const typeBuilder = new TypeBuilder(
      0,
      stringTypeMapping,
      this._options.alphabetizeProperties,
      this._options.allPropertiesOptional,
      this._options.checkProvenance,
      false
    );

    return { targetLanguage, stringTypeMapping, conflateNumbers, typeBuilder };
  }

  async makeGraph(allInputs: InputData): Promise<TypeGraph> {
    const graphInputs = this.makeGraphInputs();

    await this.timeSync(
      "read input",
      async () =>
        await allInputs.addTypes(
          this,
          graphInputs.typeBuilder,
          this._options.inferMaps,
          this._options.inferEnums,
          this._options.fixedTopLevels
        )
    );

    return this.processGraph(allInputs, graphInputs);
  }

  makeGraphSync(allInputs: InputData): TypeGraph {
    const graphInputs = this.makeGraphInputs();

    this.time("read input", () =>
      allInputs.addTypesSync(
        this,
        graphInputs.typeBuilder,
        this._options.inferMaps,
        this._options.inferEnums,
        this._options.fixedTopLevels
      )
    );

    return this.processGraph(allInputs, graphInputs);
  }

  private processGraph(
    allInputs: InputData,
    graphInputs: GraphInputs
  ): TypeGraph {
    const { targetLanguage, stringTypeMapping, conflateNumbers, typeBuilder } =
      graphInputs;

    let graph = typeBuilder.finish();
    if (this._options.debugPrintGraph) {
      graph.setPrintOnRewrite();
      graph.printGraph();
    }

    const debugPrintReconstitution = this.debugPrintReconstitution;

    if (
      typeBuilder.didAddForwardingIntersection ||
      !this._options.ignoreJsonRefs
    ) {
      this.time(
        "remove indirection intersections",
        () =>
          (graph = removeIndirectionIntersections(
            graph,
            stringTypeMapping,
            debugPrintReconstitution
          ))
      );
    }

    let unionsDone = false;
    if (allInputs.needSchemaProcessing || !this._options.ignoreJsonRefs) {
      let intersectionsDone = false;
      do {
        const graphBeforeRewrites = graph;
        if (!intersectionsDone) {
          this.time(
            "resolve intersections",
            () =>
              ([graph, intersectionsDone] = resolveIntersections(
                graph,
                stringTypeMapping,
                debugPrintReconstitution
              ))
          );
        }
        if (!unionsDone) {
          this.time(
            "flatten unions",
            () =>
              ([graph, unionsDone] = flattenUnions(
                graph,
                stringTypeMapping,
                conflateNumbers,
                true,
                debugPrintReconstitution
              ))
          );
        }

        if (graph === graphBeforeRewrites) {
          assert(
            intersectionsDone && unionsDone,
            "Graph didn't change but we're not done"
          );
        }
      } while (!intersectionsDone || !unionsDone);
    }

    this.time(
      "replace object type",
      () =>
        (graph = replaceObjectType(
          graph,
          stringTypeMapping,
          conflateNumbers,
          targetLanguage.supportsFullObjectType,
          debugPrintReconstitution
        ))
    );
    do {
      this.time(
        "flatten unions",
        () =>
          ([graph, unionsDone] = flattenUnions(
            graph,
            stringTypeMapping,
            conflateNumbers,
            false,
            debugPrintReconstitution
          ))
      );
    } while (!unionsDone);

    if (this._options.combineClasses) {
      const combinedGraph = this.time("combine classes", () =>
        combineClasses(
          this,
          graph,
          this._options.alphabetizeProperties,
          true,
          false,
          debugPrintReconstitution
        )
      );
      if (combinedGraph === graph) {
        graph = combinedGraph;
      } else {
        this.time(
          "combine classes cleanup",
          () =>
            (graph = combineClasses(
              this,
              combinedGraph,
              this._options.alphabetizeProperties,
              false,
              true,
              debugPrintReconstitution
            ))
        );
      }
    }

    if (this._options.inferMaps) {
      for (;;) {
        const newGraph = this.time("infer maps", () =>
          inferMaps(graph, stringTypeMapping, true, debugPrintReconstitution)
        );
        if (newGraph === graph) {
          break;
        }
        graph = newGraph;
      }
    }

    const enumInference = allInputs.needSchemaProcessing
      ? "all"
      : this._options.inferEnums
      ? "infer"
      : "none";
    this.time(
      "expand strings",
      () => (graph = expandStrings(this, graph, enumInference))
    );
    this.time(
      "flatten unions",
      () =>
        ([graph, unionsDone] = flattenUnions(
          graph,
          stringTypeMapping,
          conflateNumbers,
          false,
          debugPrintReconstitution
        ))
    );
    assert(
      unionsDone,
      "We should only have to flatten unions once after expanding strings"
    );

    if (allInputs.needSchemaProcessing) {
      this.time(
        "flatten strings",
        () =>
          (graph = flattenStrings(
            graph,
            stringTypeMapping,
            debugPrintReconstitution
          ))
      );
    }

    this.time(
      "none to any",
      () =>
        (graph = noneToAny(graph, stringTypeMapping, debugPrintReconstitution))
    );
    if (!targetLanguage.supportsOptionalClassProperties) {
      this.time(
        "optional to nullable",
        () =>
          (graph = optionalToNullable(
            graph,
            stringTypeMapping,
            debugPrintReconstitution
          ))
      );
    }

    this.time(
      "fixed point",
      () => (graph = graph.rewriteFixedPoint(false, debugPrintReconstitution))
    );

    this.time(
      "make transformations",
      () => (graph = makeTransformations(this, graph, targetLanguage))
    );

    this.time(
      "flatten unions",
      () =>
        ([graph, unionsDone] = flattenUnions(
          graph,
          stringTypeMapping,
          conflateNumbers,
          false,
          debugPrintReconstitution
        ))
    );
    assert(
      unionsDone,
      "We should only have to flatten unions once after making transformations"
    );

    // Sometimes we combine classes in ways that will the order come out
    // differently compared to what it would be from the equivalent schema,
    // so we always just garbage collect to get a defined order and be done
    // with it.
    // FIXME: We don't actually have to do this if any of the above graph
    // rewrites did anything.  We could just check whether the current graph
    // is different from the one we started out with.
    this.time(
      "GC",
      () =>
        (graph = graph.garbageCollect(
          this._options.alphabetizeProperties,
          debugPrintReconstitution
        ))
    );

    if (this._options.debugPrintGraph) {
      console.log("\n# gather names");
    }
    this.time("gather names", () =>
      gatherNames(
        graph,
        !allInputs.needSchemaProcessing,
        this._options.debugPrintGatherNames
      )
    );
    if (this._options.debugPrintGraph) {
      graph.printGraph();
    }

    return graph;
  }

  private makeSimpleTextResult(lines: string[]): MultiFileRenderResult {
    return new Map([
      [this._options.outputFilename, { lines, annotations: [] }],
    ] as [string, SerializedRenderResult][]);
  }

  private preRun(): MultiFileRenderResult | [InputData, TargetLanguage] {
    // FIXME: This makes quicktype not quite reentrant
    initTypeNames();

    const targetLanguage = getTargetLanguage(this._options.lang);
    const inputData = this._options.inputData;
    const needIR =
      inputData.needIR || targetLanguage.names.indexOf("schema") < 0;

    const schemaString = needIR
      ? undefined
      : inputData.singleStringSchemaSource();
    if (schemaString !== undefined) {
      const lines = JSON.stringify(
        JSON.parse(schemaString),
        undefined,
        4
      ).split("\n");
      lines.push("");
      const srr = { lines, annotations: [] };
      return new Map([
        [this._options.outputFilename, srr] as [string, SerializedRenderResult],
      ]);
    }

    return [inputData, targetLanguage];
  }

  async run(): Promise<MultiFileRenderResult> {
    const preRunResult = this.preRun();
    if (!Array.isArray(preRunResult)) {
      return preRunResult;
    }

    const [inputData, targetLanguage] = preRunResult;

    const graph = await this.makeGraph(inputData);

    return this.renderGraph(targetLanguage, graph);
  }

  runSync(): MultiFileRenderResult {
    const preRunResult = this.preRun();
    if (!Array.isArray(preRunResult)) {
      return preRunResult;
    }

    const [inputData, targetLanguage] = preRunResult;

    const graph = this.makeGraphSync(inputData);

    return this.renderGraph(targetLanguage, graph);
  }

  private renderGraph(
    targetLanguage: TargetLanguage,
    graph: TypeGraph
  ): MultiFileRenderResult {
    if (this._options.noRender) {
      return this.makeSimpleTextResult(["Done.", ""]);
    }

    return targetLanguage.renderGraphAndSerialize(
      graph,
      this._options.outputFilename,
      this._options.alphabetizeProperties,
      this._options.leadingComments,
      this._options.rendererOptions,
      this._options.indentation
    );
  }
}
