# FileFormat

The file format of the file

## Example Usage

```typescript
import { AtsDocumentApiModelValue, FileFormat } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FileFormat = {
  sourceValue: "abc",
  value: AtsDocumentApiModelValue.Pdf,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.AtsDocumentApiModelSchemasSourceValue*                                            | :heavy_minus_sign:                                                                        | N/A                                                                                       | abc                                                                                       |
| `value`                                                                                   | [shared.AtsDocumentApiModelValue](../../../sdk/models/shared/atsdocumentapimodelvalue.md) | :heavy_minus_sign:                                                                        | The file format of the file, expressed as a file extension                                | pdf                                                                                       |