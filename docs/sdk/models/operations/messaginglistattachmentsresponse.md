# MessagingListAttachmentsResponse

## Example Usage

```typescript
import { MessagingListAttachmentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MessagingListAttachmentsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  statusCode: 340825,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `messagingAttachmentsPaginated`                                                                     | [shared.MessagingAttachmentsPaginated](../../../sdk/models/shared/messagingattachmentspaginated.md) | :heavy_minus_sign:                                                                                  | The list of attachments was retrieved.                                                              |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |