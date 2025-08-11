# MessagingDownloadMessagingAttachmentRequest

## Example Usage

```typescript
import { MessagingDownloadMessagingAttachmentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MessagingDownloadMessagingAttachmentRequest = {
  exportFormat: "text/plain",
  format: "base64",
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `exportFormat`                     | *string*                           | :heavy_minus_sign:                 | The export format of the file      | text/plain                         |
| `format`                           | *string*                           | :heavy_minus_sign:                 | The format to download the file in | base64                             |
| `id`                               | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `subResourceId`                    | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `xAccountId`                       | *string*                           | :heavy_check_mark:                 | The account identifier             |                                    |