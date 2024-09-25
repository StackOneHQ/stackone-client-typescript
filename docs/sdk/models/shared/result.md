# Result

## Example Usage

```typescript
import { AssessmentsResultsValue, Result } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Result = {
  sourceValue: "Passed",
  value: AssessmentsResultsValue.Passed,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sourceValue`                                                                           | *shared.AssessmentsResultsSourceValue*                                                  | :heavy_minus_sign:                                                                      | The source value of the assessment result.                                              | Passed                                                                                  |
| `value`                                                                                 | [shared.AssessmentsResultsValue](../../../sdk/models/shared/assessmentsresultsvalue.md) | :heavy_minus_sign:                                                                      | The result of the assessment.                                                           | passed                                                                                  |