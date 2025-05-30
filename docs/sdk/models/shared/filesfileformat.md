# FilesFileFormat

The file format of the file

## Example Usage

```typescript
import { FilesFileFormat, FilesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FilesFileFormat = {
  sourceValue: "application/pdf",
  value: FilesValue.Pdf,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `sourceValue`                                                 | *shared.FilesSourceValue*                                     | :heavy_minus_sign:                                            | N/A                                                           | application/pdf                                               |
| `value`                                                       | [shared.FilesValue](../../../sdk/models/shared/filesvalue.md) | :heavy_minus_sign:                                            | The file format of the file, expressed as a file extension    | pdf                                                           |