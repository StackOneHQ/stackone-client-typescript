# MarketingUpdateContentBlockRequest

## Example Usage

```typescript
import { MarketingUpdateContentBlockRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingUpdateContentBlockRequest = {
  marketingCreateContentBlocksRequestDto: {
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `marketingCreateContentBlocksRequestDto`                                                                              | [shared.MarketingCreateContentBlocksRequestDto](../../../sdk/models/shared/marketingcreatecontentblocksrequestdto.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `xAccountId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The account identifier                                                                                                |