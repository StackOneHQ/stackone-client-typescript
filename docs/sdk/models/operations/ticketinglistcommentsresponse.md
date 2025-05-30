# TicketingListCommentsResponse

## Example Usage

```typescript
import { TicketingListCommentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingListCommentsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 204,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingCommentsPaginated: {
    data: [
      {
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
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `ticketingCommentsPaginated`                                                                  | [shared.TicketingCommentsPaginated](../../../sdk/models/shared/ticketingcommentspaginated.md) | :heavy_minus_sign:                                                                            | The list of comments was retrieved.                                                           |