# MarketingCreateInAppTemplateRequest

## Example Usage

```typescript
import { MarketingCreateInAppTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { InAppMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateInAppTemplateRequest = {
  marketingCreateInAppTemplateRequestDto: {
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
| `marketingCreateInAppTemplateRequestDto`                                                                                                                                 | [shared.MarketingCreateInAppTemplateRequestDto](../../../sdk/models/shared/marketingcreateinapptemplaterequestdto.md)                                                    | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |