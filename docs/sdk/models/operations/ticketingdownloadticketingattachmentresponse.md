# TicketingDownloadTicketingAttachmentResponse

## Example Usage

```typescript
import { TicketingDownloadTicketingAttachmentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingDownloadTicketingAttachmentResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 508542,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `body`                                                                | *Uint8Array*                                                          | :heavy_minus_sign:                                                    | N/A                                                                   |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |