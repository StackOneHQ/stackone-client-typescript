# MarketingUpdateOmniChannelTemplateRequest

## Example Usage

```typescript
import { MarketingUpdateOmniChannelTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingUpdateOmniChannelTemplateRequest = {
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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                         | [shared.MarketingCreateTemplateRequestDto](../../../sdk/models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |