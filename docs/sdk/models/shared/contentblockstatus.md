# ContentBlockStatus

Stackone enum identifying the status of content block.

## Example Usage

```typescript
import { ContentBlockStatus, ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlockStatus = {
  sourceValue: "active",
  value: ContentBlockValue.Live,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.ContentBlockSourceValue*                                            | :heavy_minus_sign:                                                          | The source value of the status.                                             | active                                                                      |
| `value`                                                                     | [shared.ContentBlockValue](../../../sdk/models/shared/contentblockvalue.md) | :heavy_minus_sign:                                                          | The Status of the content blocks.                                           | live                                                                        |