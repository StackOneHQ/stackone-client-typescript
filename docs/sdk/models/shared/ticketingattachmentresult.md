# TicketingAttachmentResult

## Example Usage

```typescript
import { TicketingAttachmentResult, TicketingAttachmentResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingAttachmentResult = {
  data: {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "application/pdf",
      value: TicketingAttachmentResultValue.Pdf,
    },
    fileName: "file.pdf",
    fileUrl: "https://example.com/files/screenshot.png",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    size: 1024,
    ticketId: "ticket-001",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    userId: "user-001",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.TicketingAttachmentResultData](../../../sdk/models/shared/ticketingattachmentresultdata.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `raw`                                                                                               | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |