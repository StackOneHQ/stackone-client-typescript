# AtsDocumentApiModelFileFormat

The file format of the file

## Example Usage

```typescript
import { AtsDocumentApiModelFileFormat, AtsDocumentApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsDocumentApiModelFileFormat = {
  sourceValue: "application/pdf",
  value: AtsDocumentApiModelSchemasValue.Pdf,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                           | *shared.AtsDocumentApiModelSchemasSourceValue*                                                          | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | application/pdf                                                                                         |
| `value`                                                                                                 | [shared.AtsDocumentApiModelSchemasValue](../../../sdk/models/shared/atsdocumentapimodelschemasvalue.md) | :heavy_minus_sign:                                                                                      | The file format of the file, expressed as a file extension                                              | pdf                                                                                                     |