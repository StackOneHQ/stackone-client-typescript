# HrisDocumentsUploadRequestDtoFileFormat

The file format of the file

## Example Usage

```typescript
import {
  HrisDocumentsUploadRequestDtoFileFormat,
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentsUploadRequestDtoFileFormat = {
  sourceValue: "abc",
  value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                   | *shared.HrisDocumentsUploadRequestDtoSchemasSourceValue*                                                                                        | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             | abc                                                                                                                                             |
| `value`                                                                                                                                         | [shared.HrisDocumentsUploadRequestDtoSchemasFileFormatValue](../../../sdk/models/shared/hrisdocumentsuploadrequestdtoschemasfileformatvalue.md) | :heavy_minus_sign:                                                                                                                              | The file format of the file, expressed as a file extension                                                                                      | pdf                                                                                                                                             |