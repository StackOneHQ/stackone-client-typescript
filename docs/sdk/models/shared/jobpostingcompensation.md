# JobPostingCompensation

## Example Usage

```typescript
import {
  JobPostingCompensation,
  JobPostingCompensationSchemasTypeValue,
  JobPostingCompensationSchemasValue,
  JobPostingCompensationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensation = {
  payFrequency: {
    sourceValue: "Hourly",
    value: JobPostingCompensationValue.Hourly,
  },
  payPeriod: {
    sourceValue: "Hour",
    value: JobPostingCompensationSchemasValue.Hour,
  },
  type: {
    sourceValue: "Salary",
    value: JobPostingCompensationSchemasTypeValue.Salary,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `maxValue`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `minValue`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `payFrequency`                                                                                                | [shared.JobPostingCompensationPayFrequency](../../../sdk/models/shared/jobpostingcompensationpayfrequency.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `payPeriod`                                                                                                   | [shared.JobPostingCompensationPayPeriod](../../../sdk/models/shared/jobpostingcompensationpayperiod.md)       | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `type`                                                                                                        | [shared.JobPostingCompensationType](../../../sdk/models/shared/jobpostingcompensationtype.md)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `value`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |