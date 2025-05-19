# TicketingListTicketStatusesResponse

## Example Usage

```typescript
import { TicketingListTicketStatusesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingTicketStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingListTicketStatusesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 206,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingTicketStatusesPaginated: {
    data: [
      {
        id: "001",
        name: "Backlog",
        type: {
          sourceValue: "New",
          value: TicketingTicketStatusValue.ToDo,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `ticketingTicketStatusesPaginated`                                                                        | [shared.TicketingTicketStatusesPaginated](../../../sdk/models/shared/ticketingticketstatusespaginated.md) | :heavy_minus_sign:                                                                                        | The list of ticket statuses was retrieved.                                                                |