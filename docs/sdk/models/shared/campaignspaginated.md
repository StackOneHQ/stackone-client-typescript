# CampaignsPaginated

## Example Usage

```typescript
import { CampaignSchemasValue, CampaignsPaginated, CampaignValue, ChannelsEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignsPaginated = {
  data: [
    {
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
            value: {},
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
            value: {},
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
            value: {},
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
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.Campaign](../../../sdk/models/shared/campaign.md)[]                                                             | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |