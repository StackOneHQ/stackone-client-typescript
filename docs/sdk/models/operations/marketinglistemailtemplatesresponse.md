# MarketingListEmailTemplatesResponse

## Example Usage

```typescript
import { MarketingListEmailTemplatesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { EmailMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingListEmailTemplatesResponse = {
  contentType: "<value>",
  emailTemplatesPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T00:00:00.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messages: [
          {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            messageType: {
              sourceValue: "Email",
              value: EmailMessagesValue.Email,
            },
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: new Date("2021-01-01T00:00:00.000Z"),
      },
    ],
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `emailTemplatesPaginated`                                                               | [shared.EmailTemplatesPaginated](../../../sdk/models/shared/emailtemplatespaginated.md) | :heavy_minus_sign:                                                                      | The list of email templates was retrieved.                                              |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |