# DocumentsUploadFileRequest

## Example Usage

```typescript
import { DocumentsUploadFileRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsUploadFileRequest = {
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `unifiedUploadRequestDto`                                                               | [shared.UnifiedUploadRequestDto](../../../sdk/models/shared/unifieduploadrequestdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `xAccountId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The account identifier                                                                  |
| `xStackoneApiSessionToken`                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | The session token                                                                       |