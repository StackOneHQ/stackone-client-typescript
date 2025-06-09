# EmploymentPayFrequency

The pay frequency

## Example Usage

```typescript
import { EmploymentPayFrequency, EmploymentSchemasPayFrequencyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentPayFrequency = {
  sourceValue: "Hourly",
  value: EmploymentSchemasPayFrequencyValue.Hourly,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.EmploymentSchemasPayFrequencySourceValue*                                                             | :heavy_minus_sign:                                                                                            | The source value of the pay frequency.                                                                        | Hourly                                                                                                        |
| `value`                                                                                                       | [shared.EmploymentSchemasPayFrequencyValue](../../../sdk/models/shared/employmentschemaspayfrequencyvalue.md) | :heavy_minus_sign:                                                                                            | The pay frequency of the job postings.                                                                        | hourly                                                                                                        |