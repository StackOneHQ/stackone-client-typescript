# UnifiedUploadRequestDto

## Example Usage

```typescript
import {
  UnifiedUploadRequestDto,
  UnifiedUploadRequestDtoSchemasValue,
  UnifiedUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedUploadRequestDto = {
  category: {
    sourceValue: "550e8400-e29b-41d4-a716-446655440000, CUSTOM_CATEGORY_NAME",
    value: "reports, resumes",
  },
  categoryId: "6530",
  confidential: {
    sourceValue: "public",
    value: UnifiedUploadRequestDtoValue.True,
  },
  content:
    "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
  fileFormat: {
    sourceValue: "abc",
    value: UnifiedUploadRequestDtoSchemasValue.Pdf,
  },
  name: "weather-forecast",
  path: "/path/to/file",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                          | [shared.UnifiedUploadRequestDtoCategory](../../../sdk/models/shared/unifieduploadrequestdtocategory.md)             | :heavy_minus_sign:                                                                                                  | The category object for associating uploaded files. If both an ID and a name are provided, the ID takes precedence. |                                                                                                                     |
| `categoryId`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The categoryId of the documents                                                                                     | 6530                                                                                                                |
| `confidential`                                                                                                      | [shared.UnifiedUploadRequestDtoConfidential](../../../sdk/models/shared/unifieduploadrequestdtoconfidential.md)     | :heavy_minus_sign:                                                                                                  | The confidentiality level of the file to be uploaded                                                                |                                                                                                                     |
| `content`                                                                                                           | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The base64 encoded content of the file to upload                                                                    | VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE                                     |
| `fileFormat`                                                                                                        | [shared.UnifiedUploadRequestDtoFileFormat](../../../sdk/models/shared/unifieduploadrequestdtofileformat.md)         | :heavy_minus_sign:                                                                                                  | The file format of the file                                                                                         |                                                                                                                     |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The filename of the file to upload                                                                                  | weather-forecast                                                                                                    |
| `path`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The path for the file to be uploaded to                                                                             | /path/to/file                                                                                                       |