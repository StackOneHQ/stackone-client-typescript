# CompletionScore

The score associated with this completion

## Example Usage

```typescript
import { CompletionScore } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionScore = {
  percentage: 87,
  rawValue: "87 / 100",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `percentage`               | *number*                   | :heavy_minus_sign:         | The score percentage       | 87.5                       |
| `rawValue`                 | *string*                   | :heavy_minus_sign:         | The raw string score value | 87 / 100                   |