# MarketingCreatePushTemplateRequest

## Example Usage

```typescript
import { MarketingCreatePushTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { PushMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreatePushTemplateRequest = {
  marketingCreatePushTemplateRequestDto: {
    messages: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messageType: {
          sourceValue: "Email",
          value: PushMessagesValue.Email,
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingCreatePushTemplateRequestDto`                                                                                                                                  | [shared.MarketingCreatePushTemplateRequestDto](../../../sdk/models/shared/marketingcreatepushtemplaterequestdto.md)                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |