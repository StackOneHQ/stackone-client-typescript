# CampaignResult

## Example Usage

```typescript
import {
  CampaignResult,
  CampaignSchemasValue,
  CampaignValue,
  ChannelsEnumValue,
  MessageValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignResult = {
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
          value: MessageValue.Sms,
        },
        name: "SMS Message",
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
          value: MessageValue.Email,
        },
        name: "Email Message",
      },
      {
        id: "message-id-3",
        messageContent: {
          body: "This is an example push notification body.",
        },
        messageType: {
          value: MessageValue.IosPush,
        },
        name: "iOS Push Message",
      },
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    scheduleType: {
      sourceValue: "Immediate",
      value: CampaignValue.Immediate,
    },
    status: {
      sourceValue: "Email",
      value: CampaignSchemasValue.Live,
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Campaign](../../../sdk/models/shared/campaign.md)         | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |