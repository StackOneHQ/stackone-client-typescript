# MessagingAttachmentResult

## Example Usage

```typescript
import { MessagingAttachmentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingAttachmentResult = {
  data: {
    fileName: "document.pdf",
    fileSize: 1024,
    fileType: "application/pdf",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.MessagingAttachmentResultData](../../../sdk/models/shared/messagingattachmentresultdata.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `raw`                                                                                               | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |