# HrisUploadEmployeeDocumentRequest

## Example Usage

```typescript
import { HrisUploadEmployeeDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUploadEmployeeDocumentRequest = {
  hrisDocumentsUploadRequestDto: {
    category: {
      sourceValue: "550e8400-e29b-41d4-a716-446655440000",
      value: HrisDocumentsUploadRequestDtoValue.Resume,
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `hrisDocumentsUploadRequestDto`                                                                     | [shared.HrisDocumentsUploadRequestDto](../../../sdk/models/shared/hrisdocumentsuploadrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |