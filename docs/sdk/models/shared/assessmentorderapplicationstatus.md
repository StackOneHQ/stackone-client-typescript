# AssessmentOrderApplicationStatus

## Example Usage

```typescript
import { AssessmentOrderApplicationStatus, AssessmentOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentOrderApplicationStatus = {
  sourceValue: "Hired",
  value: AssessmentOrderValue.Hired,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.AssessmentOrderSourceValue*                                               | :heavy_minus_sign:                                                                | The source value of the application status.                                       | Hired                                                                             |
| `value`                                                                           | [shared.AssessmentOrderValue](../../../sdk/models/shared/assessmentordervalue.md) | :heavy_minus_sign:                                                                | The status of the application.                                                    | hired                                                                             |