# EmploymentPayPeriod

The pay period

## Example Usage

```typescript
import { EmploymentPayPeriod, EmploymentSchemasPayPeriodValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentPayPeriod = {
  sourceValue: "Hour",
  value: EmploymentSchemasPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                           | *shared.EmploymentSchemasPayPeriodSourceValue*                                                          | :heavy_minus_sign:                                                                                      | The source value of the pay period.                                                                     | Hour                                                                                                    |
| `value`                                                                                                 | [shared.EmploymentSchemasPayPeriodValue](../../../sdk/models/shared/employmentschemaspayperiodvalue.md) | :heavy_minus_sign:                                                                                      | The pay period of the job postings.                                                                     | hour                                                                                                    |