# FileFileFormat

The file format of the file

## Example Usage

```typescript
import { FileFileFormat, FileValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FileFileFormat = {
  sourceValue: "abc",
  value: FileValue.Pdf,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `sourceValue`                                               | *shared.FileSchemasSourceValue*                             | :heavy_minus_sign:                                          | N/A                                                         | abc                                                         |
| `value`                                                     | [shared.FileValue](../../../sdk/models/shared/filevalue.md) | :heavy_minus_sign:                                          | The file format of the file, expressed as a file extension  | pdf                                                         |