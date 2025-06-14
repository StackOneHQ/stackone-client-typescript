# AtsUploadApplicationDocumentRequest

## Example Usage

```typescript
import { AtsUploadApplicationDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUploadApplicationDocumentRequest = {
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `unifiedUploadRequestDto`                                                               | [shared.UnifiedUploadRequestDto](../../../sdk/models/shared/unifieduploadrequestdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `xAccountId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The account identifier                                                                  |