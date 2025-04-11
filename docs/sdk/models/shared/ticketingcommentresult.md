# TicketingCommentResult

## Example Usage

```typescript
import { TicketingCommentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingCommentResult = {
  data: {
    content: [
      {
        html: "<p>This is some content</p>",
        plain: "This is some content",
      },
    ],
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    internal: false,
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    ticketId: "ticket-001",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    userId: "user-001",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.TicketingCommentResultData](../../../sdk/models/shared/ticketingcommentresultdata.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |