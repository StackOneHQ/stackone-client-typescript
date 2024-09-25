# ContentBlockType

Stackone enum identifying the type of content block.

## Example Usage

```typescript
import { ContentBlockSchemasValue, ContentBlockType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlockType = {
  sourceValue: "text",
  value: ContentBlockSchemasValue.Image,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.ContentBlockSchemasSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the type.                                                             | text                                                                                      |
| `value`                                                                                   | [shared.ContentBlockSchemasValue](../../../sdk/models/shared/contentblockschemasvalue.md) | :heavy_minus_sign:                                                                        | The type of the content blocks.                                                           | email                                                                                     |