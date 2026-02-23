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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `atsDocumentsUploadRequestDto`                                                                    | [shared.AtsDocumentsUploadRequestDto](../../../sdk/models/shared/atsdocumentsuploadrequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |