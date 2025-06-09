# TicketingListCollectionsResponse

## Example Usage

```typescript
import { TicketingListCollectionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingListCollectionsResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `ticketingCollectionsPaginated`                                                                     | [shared.TicketingCollectionsPaginated](../../../sdk/models/shared/ticketingcollectionspaginated.md) | :heavy_minus_sign:                                                                                  | The list of collections was retrieved.                                                              |