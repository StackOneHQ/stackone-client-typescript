# Result

## Example Usage

```typescript
import { AssessmentResultValue, Result } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Result = {
  sourceValue: "Passed",
  value: AssessmentResultValue.Passed,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `sourceValue`                                                                       | *shared.AssessmentResultSourceValue*                                                | :heavy_minus_sign:                                                                  | The source value of the test result.                                                | Passed                                                                              |
| `value`                                                                             | [shared.AssessmentResultValue](../../../sdk/models/shared/assessmentresultvalue.md) | :heavy_minus_sign:                                                                  | The result of the test.                                                             | passed                                                                              |