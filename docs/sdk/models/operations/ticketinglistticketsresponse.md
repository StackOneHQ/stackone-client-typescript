# TicketingListTicketsResponse

## Example Usage

```typescript
import { TicketingListTicketsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingListTicketsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 71288,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `ticketingTicketsPaginated`                                                                 | [shared.TicketingTicketsPaginated](../../../sdk/models/shared/ticketingticketspaginated.md) | :heavy_minus_sign:                                                                          | The list of tickets was retrieved.                                                          |