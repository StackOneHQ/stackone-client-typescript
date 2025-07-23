# TicketingGetProjectComponentResponse

## Example Usage

```typescript
import { TicketingGetProjectComponentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingGetProjectComponentResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 91524,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `ticketingComponentResult`                                                                | [shared.TicketingComponentResult](../../../sdk/models/shared/ticketingcomponentresult.md) | :heavy_minus_sign:                                                                        | The project component with the given identifier was retrieved.                            |