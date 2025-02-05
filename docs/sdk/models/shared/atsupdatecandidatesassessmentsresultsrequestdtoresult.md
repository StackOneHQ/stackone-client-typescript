# AtsUpdateCandidatesAssessmentsResultsRequestDtoResult

## Example Usage

```typescript
import {
  AtsUpdateCandidatesAssessmentsResultsRequestDtoResult,
  AtsUpdateCandidatesAssessmentsResultsRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateCandidatesAssessmentsResultsRequestDtoResult = {
  sourceValue: "Passed",
  value: AtsUpdateCandidatesAssessmentsResultsRequestDtoValue.Passed,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                     | *shared.AtsUpdateCandidatesAssessmentsResultsRequestDtoSourceValue*                                                                               | :heavy_minus_sign:                                                                                                                                | The source value of the test result.                                                                                                              | Passed                                                                                                                                            |
| `value`                                                                                                                                           | [shared.AtsUpdateCandidatesAssessmentsResultsRequestDtoValue](../../../sdk/models/shared/atsupdatecandidatesassessmentsresultsrequestdtovalue.md) | :heavy_minus_sign:                                                                                                                                | The result of the test.                                                                                                                           | passed                                                                                                                                            |