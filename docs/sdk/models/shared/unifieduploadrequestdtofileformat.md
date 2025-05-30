# UnifiedUploadRequestDtoFileFormat

The file format of the file

## Example Usage

```typescript
import { UnifiedUploadRequestDtoFileFormat, UnifiedUploadRequestDtoSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedUploadRequestDtoFileFormat = {
  sourceValue: "application/pdf",
  value: UnifiedUploadRequestDtoSchemasValue.Pdf,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.UnifiedUploadRequestDtoSchemasSourceValue*                                                              | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | application/pdf                                                                                                 |
| `value`                                                                                                         | [shared.UnifiedUploadRequestDtoSchemasValue](../../../sdk/models/shared/unifieduploadrequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                              | The file format of the file, expressed as a file extension                                                      | pdf                                                                                                             |