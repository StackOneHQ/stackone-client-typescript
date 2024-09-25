# JobPostingCompensationType

## Example Usage

```typescript
import { JobPostingCompensationSchemasTypeValue, JobPostingCompensationType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensationType = {
  sourceValue: "Salary",
  value: JobPostingCompensationSchemasTypeValue.Salary,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.JobPostingCompensationSchemasTypeSourceValue*                                                                 | :heavy_minus_sign:                                                                                                    | The source value of the compensation type.                                                                            | Salary                                                                                                                |
| `value`                                                                                                               | [shared.JobPostingCompensationSchemasTypeValue](../../../sdk/models/shared/jobpostingcompensationschemastypevalue.md) | :heavy_minus_sign:                                                                                                    | The type of the compensation.                                                                                         | salary                                                                                                                |