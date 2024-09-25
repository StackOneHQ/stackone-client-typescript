# AtsUploadApplicationDocumentRequest

## Example Usage

```typescript
import { AtsUploadApplicationDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { UnifiedUploadRequestDtoSchemasValue, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUploadApplicationDocumentRequest = {
  unifiedUploadRequestDto: {
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
  },
  id: "<id>",
  xAccountId: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `unifiedUploadRequestDto`                                                               | [shared.UnifiedUploadRequestDto](../../../sdk/models/shared/unifieduploadrequestdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `xAccountId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The account identifier                                                                  |