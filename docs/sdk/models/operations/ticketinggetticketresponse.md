# TicketingGetTicketResponse

## Example Usage

```typescript
import { TicketingGetTicketResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingGetTicketResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 135125,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `ticketingTicketResult`                                                             | [shared.TicketingTicketResult](../../../sdk/models/shared/ticketingticketresult.md) | :heavy_minus_sign:                                                                  | The ticket with the given identifier was retrieved.                                 |