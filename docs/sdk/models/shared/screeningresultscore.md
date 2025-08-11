# ScreeningResultScore

Score information

## Example Usage

```typescript
import { ScreeningResultScore } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningResultScore = {
  label: "Overall Risk",
  max: "100",
  min: "0",
  value: "75",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `label`             | *string*            | :heavy_minus_sign:  | Score label         | Overall Risk        |
| `max`               | *string*            | :heavy_minus_sign:  | Maximum score value | 100                 |
| `min`               | *string*            | :heavy_minus_sign:  | Minimum score value | 0                   |
| `value`             | *string*            | :heavy_minus_sign:  | Score value         | 75                  |