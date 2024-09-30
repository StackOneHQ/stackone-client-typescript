# MarketingCreateSmsTemplateRequest

## Example Usage

```typescript
import { MarketingCreateSmsTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingCreateSmsTemplateRequest = {
  marketingCreateSmsTemplateRequestDto: {
    messages: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messageType: {
          sourceValue: "Email",
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `marketingCreateSmsTemplateRequestDto`                                                                            | [shared.MarketingCreateSmsTemplateRequestDto](../../../sdk/models/shared/marketingcreatesmstemplaterequestdto.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `xAccountId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The account identifier                                                                                            |