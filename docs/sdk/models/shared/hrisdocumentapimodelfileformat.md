# HrisDocumentApiModelFileFormat

The file format of the file

## Example Usage

```typescript
import { HrisDocumentApiModelFileFormat, HrisDocumentApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentApiModelFileFormat = {
  sourceValue: "abc",
  value: HrisDocumentApiModelSchemasValue.Pdf,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                             | *shared.HrisDocumentApiModelSchemasSourceValue*                                                           | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | abc                                                                                                       |
| `value`                                                                                                   | [shared.HrisDocumentApiModelSchemasValue](../../../sdk/models/shared/hrisdocumentapimodelschemasvalue.md) | :heavy_minus_sign:                                                                                        | The file format of the file, expressed as a file extension                                                | pdf                                                                                                       |