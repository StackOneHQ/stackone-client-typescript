# MarketingCreateContentBlockRequest

## Example Usage

```typescript
import { MarketingCreateContentBlockRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { MarketingCreateContentBlocksRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateContentBlockRequest = {
  marketingCreateContentBlocksRequestDto: {
    passthrough: {
      "other_known_names": "John Doe",
    },
    type: {
      sourceValue: "text",
      value: MarketingCreateContentBlocksRequestDtoValue.Html,
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `marketingCreateContentBlocksRequestDto`                                                                              | [shared.MarketingCreateContentBlocksRequestDto](../../../sdk/models/shared/marketingcreatecontentblocksrequestdto.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `xAccountId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The account identifier                                                                                                |