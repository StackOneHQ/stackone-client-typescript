# MarketingCreateOmniChannelTemplateRequest

## Example Usage

```typescript
import { MarketingCreateOmniChannelTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingCreateOmniChannelTemplateRequest = {
  marketingCreateTemplateRequestDto: {
    messages: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messageType: null,
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

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                         | [shared.MarketingCreateTemplateRequestDto](../../../sdk/models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |