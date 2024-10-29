# MarketingCreateContentBlocksRequestDtoType

Stackone enum identifying the type of content block.

## Example Usage

```typescript
import {
  MarketingCreateContentBlocksRequestDtoType,
  MarketingCreateContentBlocksRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateContentBlocksRequestDtoType = {
  sourceValue: "text",
  value: MarketingCreateContentBlocksRequestDtoValue.Html,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                   | *shared.MarketingCreateContentBlocksRequestDtoSourceValue*                                                                      | :heavy_minus_sign:                                                                                                              | The source value of the type.                                                                                                   | text                                                                                                                            |
| `value`                                                                                                                         | [shared.MarketingCreateContentBlocksRequestDtoValue](../../../sdk/models/shared/marketingcreatecontentblocksrequestdtovalue.md) | :heavy_minus_sign:                                                                                                              | The type of the content blocks.                                                                                                 | html                                                                                                                            |