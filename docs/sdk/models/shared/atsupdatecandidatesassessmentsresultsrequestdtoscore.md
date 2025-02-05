# AtsUpdateCandidatesAssessmentsResultsRequestDtoScore

## Example Usage

```typescript
import { AtsUpdateCandidatesAssessmentsResultsRequestDtoScore } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateCandidatesAssessmentsResultsRequestDtoScore = {
  label: "Percentage",
  max: "100",
  min: "0",
  value: "80",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `label`                        | *string*                       | :heavy_minus_sign:             | The label of the score         | Percentage                     |
| `max`                          | *string*                       | :heavy_minus_sign:             | The maximum value of the score | 100                            |
| `min`                          | *string*                       | :heavy_minus_sign:             | The minimum value of the score | 0                              |
| `value`                        | *string*                       | :heavy_minus_sign:             | The value is the actual score  | 80                             |