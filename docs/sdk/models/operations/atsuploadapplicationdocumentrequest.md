# AtsUploadApplicationDocumentRequest

## Example Usage

```typescript
import { AtsUploadApplicationDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  AtsDocumentsUploadRequestDtoSchemasFileFormatValue,
  AtsDocumentsUploadRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUploadApplicationDocumentRequest = {
  atsDocumentsUploadRequestDto: {
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
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsDocumentsUploadRequestDto`                                                                                                                                           | [shared.AtsDocumentsUploadRequestDto](../../../sdk/models/shared/atsdocumentsuploadrequestdto.md)                                                                        | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |