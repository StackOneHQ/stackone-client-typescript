# MarketingUpdateContentBlockRequest

## Example Usage

```typescript
import { MarketingUpdateContentBlockRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { MarketingCreateContentBlocksRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingUpdateContentBlockRequest = {
  marketingCreateContentBlocksRequestDto: {
    passthrough: {
      "other_known_names": "John Doe",
    },
    type: {
      sourceValue: "text",
      value: MarketingCreateContentBlocksRequestDtoValue.Html,
    },
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingCreateContentBlocksRequestDto`                                                                                                                                 | [shared.MarketingCreateContentBlocksRequestDto](../../../sdk/models/shared/marketingcreatecontentblocksrequestdto.md)                                                    | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |