# JobPostingCompensationPayFrequency

## Example Usage

```typescript
import { JobPostingCompensationPayFrequency, JobPostingCompensationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensationPayFrequency = {
  sourceValue: "Hourly",
  value: JobPostingCompensationValue.Hourly,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                   | *shared.JobPostingCompensationSourceValue*                                                      | :heavy_minus_sign:                                                                              | The source value of the pay frequency.                                                          | Hourly                                                                                          |
| `value`                                                                                         | [shared.JobPostingCompensationValue](../../../sdk/models/shared/jobpostingcompensationvalue.md) | :heavy_minus_sign:                                                                              | The pay frequency of the job postings.                                                          | hourly                                                                                          |