# AssessmentsOrderApplicationStatus

## Example Usage

```typescript
import { AssessmentsOrderApplicationStatus, AssessmentsOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsOrderApplicationStatus = {
  sourceValue: "Hired",
  value: AssessmentsOrderValue.Hired,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `sourceValue`                                                                       | *shared.AssessmentsOrderSourceValue*                                                | :heavy_minus_sign:                                                                  | The source value of the application status.                                         | Hired                                                                               |
| `value`                                                                             | [shared.AssessmentsOrderValue](../../../sdk/models/shared/assessmentsordervalue.md) | :heavy_minus_sign:                                                                  | The status of the application.                                                      | hired                                                                               |