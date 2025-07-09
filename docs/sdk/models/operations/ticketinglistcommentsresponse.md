# TicketingListCommentsResponse

## Example Usage

```typescript
import { TicketingListCommentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingListCommentsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 322420,
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