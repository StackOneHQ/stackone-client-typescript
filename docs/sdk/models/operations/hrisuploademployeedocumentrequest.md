# HrisUploadEmployeeDocumentRequest

## Example Usage

```typescript
import { HrisUploadEmployeeDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HrisDocumentsUploadRequestDtoSchemasFileFormatValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUploadEmployeeDocumentRequest = {
  hrisDocumentsUploadRequestDto: {
    category: {},
    categoryId: "6530",
    confidential: null,
    content:
      "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
    fileFormat: {
      sourceValue: "application/pdf",
      value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
    },
    name: "weather-forecast",
    path: "/path/to/file",
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisDocumentsUploadRequestDto`                                                                                                                                          | [shared.HrisDocumentsUploadRequestDto](../../../sdk/models/shared/hrisdocumentsuploadrequestdto.md)                                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |