# HrisBatchUploadEmployeeDocumentRequest

## Example Usage

```typescript
import { HrisBatchUploadEmployeeDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisBatchUploadEmployeeDocumentRequest = {
  hrisBatchDocumentUploadRequestDto: {
    items: [
      {
        category: {
          sourceValue: "550e8400-e29b-41d4-a716-446655440000",
          value: HrisDocumentsUploadRequestDtoValue.Signed,
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
    ],
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `hrisBatchDocumentUploadRequestDto`                                                                         | [shared.HrisBatchDocumentUploadRequestDto](../../../sdk/models/shared/hrisbatchdocumentuploadrequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |