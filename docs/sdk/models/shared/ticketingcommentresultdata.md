# TicketingCommentResultData

## Example Usage

```typescript
import { TicketingCommentResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingCommentResultData = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | [shared.TicketingContent](../../../sdk/models/shared/ticketingcontent.md)[]                   | :heavy_minus_sign:                                                                            | Array of content associated with the comment                                                  |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was created                                                     | 2021-01-01T01:01:01.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `internal`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the comment is internal                                                               | false                                                                                         |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `ticketId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ticket ID associated with the comment                                                     | ticket-001                                                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was last updated                                                | 2021-01-01T01:01:01.000Z                                                                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user who created the comment                                                              | user-001                                                                                      |