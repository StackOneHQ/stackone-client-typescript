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