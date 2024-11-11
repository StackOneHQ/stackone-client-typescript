# MarketingGetCampaignResponse

## Example Usage

```typescript
import { MarketingGetCampaignResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { CampaignSchemasValue, CampaignValue, ChannelsEnumValue, MessageValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingGetCampaignResponse = {
  campaignResult: {
    data: {
      channels: [
        {
          sourceValue: "SMS",
          value: ChannelsEnumValue.Sms,
        },
      ],
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      firstSentAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      lastSentAt: new Date("2021-01-01T01:01:01.000Z"),
      messages: [
        {
          id: "message-id-1",
          messageContent: {
            body: "This is an example SMS body.",
            from: "1-555-123-4567",
          },
          messageType: {
            sourceValue: "Email",
            value: MessageValue.Sms,
          },
          name: "SMS Message",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        {
          id: "message-id-2",
          messageContent: {
            body: "<h1>This is an example</h1>\n"
              + "            <p>email body</p>",
            from: "Jane Smith",
            preheader: "This is the preheader of the email.",
            replyTo: "reply@example.com",
            subject: "Example Email Subject",
          },
          messageType: {
            sourceValue: "Email",
            value: MessageValue.Email,
          },
          name: "Email Message",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        {
          id: "message-id-3",
          messageContent: {
            body: "This is an example push notification body.",
          },
          messageType: {
            sourceValue: "Email",
            value: MessageValue.IosPush,
          },
          name: "iOS Push Message",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      scheduleType: {
        sourceValue: "Immediate",
        value: CampaignValue.Immediate,
      },
      status: {
        sourceValue: "Email",
        value: CampaignSchemasValue.Draft,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
  contentType: "<value>",
  statusCode: 401,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `campaignResult`                                                      | [shared.CampaignResult](../../../sdk/models/shared/campaignresult.md) | :heavy_minus_sign:                                                    | The campaign with the given identifier was retrieved.                 |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |