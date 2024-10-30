# MarketingCreateContentBlocksRequestDto

## Example Usage

```typescript
import {
  MarketingCreateContentBlocksRequestDto,
  MarketingCreateContentBlocksRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateContentBlocksRequestDto = {
  passthrough: {
    "other_known_names": "John Doe",
  },
  type: {
    sourceValue: "text",
    value: MarketingCreateContentBlocksRequestDtoValue.Html,
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                     | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `passthrough`                                                                                                                 | Record<string, *any*>                                                                                                         | :heavy_minus_sign:                                                                                                            | Value to pass through to the provider                                                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                                                   |
| `tags`                                                                                                                        | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `type`                                                                                                                        | [shared.MarketingCreateContentBlocksRequestDtoType](../../../sdk/models/shared/marketingcreatecontentblocksrequestdtotype.md) | :heavy_minus_sign:                                                                                                            | Stackone enum identifying the type of content block.                                                                          |                                                                                                                               |