# AtsCreateCandidatesAssessmentsRequestDtoApplicationStatus

## Example Usage

```typescript
import {
  AtsCreateCandidatesAssessmentsRequestDtoApplicationStatus,
  AtsCreateCandidatesAssessmentsRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateCandidatesAssessmentsRequestDtoApplicationStatus = {
  sourceValue: "Hired",
  value: AtsCreateCandidatesAssessmentsRequestDtoValue.Hired,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                       | *shared.AtsCreateCandidatesAssessmentsRequestDtoSourceValue*                                                                        | :heavy_minus_sign:                                                                                                                  | The source value of the application status.                                                                                         | Hired                                                                                                                               |
| `value`                                                                                                                             | [shared.AtsCreateCandidatesAssessmentsRequestDtoValue](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtovalue.md) | :heavy_minus_sign:                                                                                                                  | The status of the application.                                                                                                      | hired                                                                                                                               |