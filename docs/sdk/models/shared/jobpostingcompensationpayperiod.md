# JobPostingCompensationPayPeriod

## Example Usage

```typescript
import { JobPostingCompensationPayPeriod, JobPostingCompensationSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensationPayPeriod = {
  sourceValue: "Hour",
  value: JobPostingCompensationSchemasValue.Hour,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.JobPostingCompensationSchemasSourceValue*                                                             | :heavy_minus_sign:                                                                                            | The source value of the pay period.                                                                           | Hour                                                                                                          |
| `value`                                                                                                       | [shared.JobPostingCompensationSchemasValue](../../../sdk/models/shared/jobpostingcompensationschemasvalue.md) | :heavy_minus_sign:                                                                                            | The pay period of the job postings.                                                                           | hour                                                                                                          |