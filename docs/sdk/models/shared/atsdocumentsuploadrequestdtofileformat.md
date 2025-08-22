# AtsDocumentsUploadRequestDtoFileFormat

The file format of the file

## Example Usage

```typescript
import {
  AtsDocumentsUploadRequestDtoFileFormat,
  AtsDocumentsUploadRequestDtoSchemasFileFormatValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsDocumentsUploadRequestDtoFileFormat = {
  sourceValue: "application/pdf",
  value: AtsDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.AtsDocumentsUploadRequestDtoSchemasSourceValue*                                                                                       | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | application/pdf                                                                                                                               |
| `value`                                                                                                                                       | [shared.AtsDocumentsUploadRequestDtoSchemasFileFormatValue](../../../sdk/models/shared/atsdocumentsuploadrequestdtoschemasfileformatvalue.md) | :heavy_minus_sign:                                                                                                                            | The file format of the file, expressed as a file extension                                                                                    | pdf                                                                                                                                           |