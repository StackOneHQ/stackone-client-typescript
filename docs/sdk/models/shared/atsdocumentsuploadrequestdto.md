# AtsDocumentsUploadRequestDto

## Example Usage

```typescript
import {
  AtsDocumentsUploadRequestDto,
  AtsDocumentsUploadRequestDtoSchemasFileFormatValue,
  AtsDocumentsUploadRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsDocumentsUploadRequestDto = {
  category: {},
  categoryId: "6530",
  confidential: {
    sourceValue: "public",
    value: AtsDocumentsUploadRequestDtoSchemasValue.True,
  },
  content:
    "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
  fileFormat: {
    sourceValue: "application/pdf",
    value: AtsDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
  },
  name: "weather-forecast",
  path: "/path/to/file",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                                | [shared.AtsDocumentsUploadRequestDtoCategory](../../../sdk/models/shared/atsdocumentsuploadrequestdtocategory.md)         | :heavy_minus_sign:                                                                                                        | The category to be associated with the file to be uploaded. Id will take precedence over name.                            | {<br/>"name": "resume",<br/>"id": "550e8400-e29b-41d4-a716-446655440000"<br/>}                                            |
| `categoryId`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The categoryId of the documents                                                                                           | 6530                                                                                                                      |
| `confidential`                                                                                                            | [shared.AtsDocumentsUploadRequestDtoConfidential](../../../sdk/models/shared/atsdocumentsuploadrequestdtoconfidential.md) | :heavy_minus_sign:                                                                                                        | The confidentiality level of the file to be uploaded                                                                      |                                                                                                                           |
| `content`                                                                                                                 | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The base64 encoded content of the file to upload                                                                          | VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE                                           |
| `fileFormat`                                                                                                              | [shared.AtsDocumentsUploadRequestDtoFileFormat](../../../sdk/models/shared/atsdocumentsuploadrequestdtofileformat.md)     | :heavy_minus_sign:                                                                                                        | The file format of the file                                                                                               |                                                                                                                           |
| `name`                                                                                                                    | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The filename of the file to upload                                                                                        | weather-forecast                                                                                                          |
| `path`                                                                                                                    | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The path for the file to be uploaded to                                                                                   | /path/to/file                                                                                                             |