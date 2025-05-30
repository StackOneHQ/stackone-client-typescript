# TicketingGetTicketTypeResponse

## Example Usage

```typescript
import { TicketingGetTicketTypeResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingGetTicketTypeResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingTicketTypeResult: {
    data: {
      id: "001",
      name: "Task",
      parentCollectionId: "collection-001",
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `ticketingTicketTypeResult`                                                                 | [shared.TicketingTicketTypeResult](../../../sdk/models/shared/ticketingtickettyperesult.md) | :heavy_minus_sign:                                                                          | The ticket type with the given identifier was retrieved.                                    |