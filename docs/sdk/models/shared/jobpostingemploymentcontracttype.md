# JobPostingEmploymentContractType

## Example Usage

```typescript
import { JobPostingEmploymentContractType, JobPostingValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingEmploymentContractType = {
  sourceValue: "FullTime",
  value: JobPostingValue.FullTime,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `sourceValue`                                                           | *shared.JobPostingSourceValue*                                          | :heavy_minus_sign:                                                      | The source value of the employment contract type.                       | FullTime                                                                |
| `value`                                                                 | [shared.JobPostingValue](../../../sdk/models/shared/jobpostingvalue.md) | :heavy_minus_sign:                                                      | The employment contract type.                                           | full_time                                                               |