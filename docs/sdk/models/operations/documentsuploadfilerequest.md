# DocumentsUploadFileRequest

## Example Usage

```typescript
import { DocumentsUploadFileRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { UnifiedUploadRequestDtoSchemasValue, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsUploadFileRequest = {
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
      sourceValue: "application/pdf",
      value: UnifiedUploadRequestDtoSchemasValue.Pdf,
    },
    name: "weather-forecast",
    path: "/path/to/file",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `unifiedUploadRequestDto`                                                               | [shared.UnifiedUploadRequestDto](../../../sdk/models/shared/unifieduploadrequestdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `xAccountId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The account identifier                                                                  |
| `xStackoneApiSessionToken`                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | The session token                                                                       |