# ContentContentType

The type of content

## Example Usage

```typescript
import { ContentContentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentContentType = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `sourceValue`                                                     | *shared.ContentSourceValue*                                       | :heavy_minus_sign:                                                | The original value from the provider before normalization.        |
| `value`                                                           | [shared.ContentValue](../../../sdk/models/shared/contentvalue.md) | :heavy_minus_sign:                                                | The StackOne unified content type.                                |