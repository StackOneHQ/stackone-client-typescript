# MarketingCreateSmsTemplateRequest

## Example Usage

```typescript
import { MarketingCreateSmsTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingCreateSmsTemplateRequest = {
  marketingCreateSmsTemplateRequestDto: {
    messages: null,
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
| `marketingCreateSmsTemplateRequestDto`                                                                                                                                   | [shared.MarketingCreateSmsTemplateRequestDto](../../../sdk/models/shared/marketingcreatesmstemplaterequestdto.md)                                                        | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |