# MarketingListInAppTemplatesResponse

## Example Usage

```typescript
import { MarketingListInAppTemplatesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { InAppMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingListInAppTemplatesResponse = {
  contentType: "<value>",
  inAppTemplatesPaginated: {
    data: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messages: [
          {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            messageType: {
              sourceValue: "Email",
              value: InAppMessagesValue.Email,
            },
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
  },
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `inAppTemplatesPaginated`                                                               | [shared.InAppTemplatesPaginated](../../../sdk/models/shared/inapptemplatespaginated.md) | :heavy_minus_sign:                                                                      | The list of in-app templates was retrieved.                                             |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |