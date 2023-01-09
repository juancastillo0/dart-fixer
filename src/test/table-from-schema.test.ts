import { modelMappingConfigValidate } from "../extension-config";
import { JTDToTable } from "../json-type-definition/markdown-table";

suite("Table From Schema", () => {
  test("JTD", () => {
    const tableGenerator = new JTDToTable(modelMappingConfigValidate.schema);

    const tables = tableGenerator.mapJTDToTable(
      "ModelMappingConfig",
      modelMappingConfigValidate.schema
    );

    console.log(tables);
  });
});
