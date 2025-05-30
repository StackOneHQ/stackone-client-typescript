# HrisBatchUploadEmployeeDocumentRequest

## Example Usage

```typescript
import { HrisBatchUploadEmployeeDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisBatchUploadEmployeeDocumentRequest = {
  hrisBatchDocumentUploadRequestDto: {
    items: [
      {
        category: {},
        categoryId: "6530",
        confidential: {
          sourceValue: "public",
          value: HrisDocumentsUploadRequestDtoSchemasValue.True,
        },
        content:
          "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
        fileFormat: {
          sourceValue: "application/pdf",
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