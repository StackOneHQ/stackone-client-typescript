# FileFormat

The file format of the file

## Example Usage

```typescript
import { FileFormat, SchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FileFormat = {
  sourceValue: "application/pdf",
  value: SchemasValue.Pdf,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `sourceValue`                                                     | *shared.SchemasSourceValue*                                       | :heavy_minus_sign:                                                | N/A                                                               | application/pdf                                                   |
| `value`                                                           | [shared.SchemasValue](../../../sdk/models/shared/schemasvalue.md) | :heavy_minus_sign:                                                | The file format of the file, expressed as a file extension        | pdf                                                               |