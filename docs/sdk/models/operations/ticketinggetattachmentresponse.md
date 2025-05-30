# TicketingGetAttachmentResponse

## Example Usage

```typescript
import { TicketingGetAttachmentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingAttachmentResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingGetAttachmentResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 205,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingAttachmentResult: {
    data: {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      fileFormat: {
        sourceValue: "application/pdf",
        value: TicketingAttachmentResultValue.Pdf,
      },
      fileName: "file.pdf",
      fileUrl: "https://example.com/files/screenshot.png",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      size: 1024,
      ticketId: "ticket-001",
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      userId: "user-001",
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
| `ticketingAttachmentResult`                                                                 | [shared.TicketingAttachmentResult](../../../sdk/models/shared/ticketingattachmentresult.md) | :heavy_minus_sign:                                                                          | The attachment with the given identifier was retrieved.                                     |