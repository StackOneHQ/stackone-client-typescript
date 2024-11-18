# HrisDocumentsUploadRequestDto

## Example Usage

```typescript
import {
  HrisDocumentsUploadRequestDto,
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentsUploadRequestDto = {
  category: {
    sourceValue: "550e8400-e29b-41d4-a716-446655440000",
    value: HrisDocumentsUploadRequestDtoValue.Contract,
  },
  categoryId: "6530",
  confidential: {
    sourceValue: "public",
    value: HrisDocumentsUploadRequestDtoSchemasValue.True,
  },
  content:
    "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
  fileFormat: {
    sourceValue: "abc",
    value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
  },
  name: "weather-forecast",
  path: "/path/to/file",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                                  | [shared.HrisDocumentsUploadRequestDtoCategory](../../../sdk/models/shared/hrisdocumentsuploadrequestdtocategory.md)         | :heavy_minus_sign:                                                                                                          | The category to be associated with the file to be uploaded. Id will take precedence over name.                              | {<br/>"name": "reports",<br/>"id": "550e8400-e29b-41d4-a716-446655440000"<br/>}                                             |
| `categoryId`                                                                                                                | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The categoryId of the documents                                                                                             | 6530                                                                                                                        |
| `confidential`                                                                                                              | [shared.HrisDocumentsUploadRequestDtoConfidential](../../../sdk/models/shared/hrisdocumentsuploadrequestdtoconfidential.md) | :heavy_minus_sign:                                                                                                          | The confidentiality level of the file to be uploaded                                                                        |                                                                                                                             |
| `content`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The base64 encoded content of the file to upload                                                                            | VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE                                             |
| `fileFormat`                                                                                                                | [shared.HrisDocumentsUploadRequestDtoFileFormat](../../../sdk/models/shared/hrisdocumentsuploadrequestdtofileformat.md)     | :heavy_minus_sign:                                                                                                          | The file format of the file                                                                                                 |                                                                                                                             |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The filename of the file to upload                                                                                          | weather-forecast                                                                                                            |
| `path`                                                                                                                      | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The path for the file to be uploaded to                                                                                     | /path/to/file                                                                                                               |