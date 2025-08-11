# MessagingAttachmentResultData

## Example Usage

```typescript
import { MessagingAttachmentResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingAttachmentResultData = {
  fileName: "document.pdf",
  fileSize: 1024,
  fileType: "application/pdf",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `fileName`                           | *string*                             | :heavy_minus_sign:                   | Name of the attached file            | document.pdf                         |
| `fileSize`                           | *number*                             | :heavy_minus_sign:                   | Size of the attached file            | 1024                                 |
| `fileType`                           | *string*                             | :heavy_minus_sign:                   | MIME type of the attached file       | application/pdf                      |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Unique identifier                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
| `remoteId`                           | *string*                             | :heavy_minus_sign:                   | Provider's unique identifier         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |