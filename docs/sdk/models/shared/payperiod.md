# PayPeriod

The pay period

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasPayPeriodValue, PayPeriod } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PayPeriod = {
  sourceValue: Hour,
  value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                       | *shared.CreateEmploymentApiModelSchemasPayPeriodSourceValue*                                                                        | :heavy_minus_sign:                                                                                                                  | The source value of the pay period.                                                                                                 | Hour                                                                                                                                |
| `value`                                                                                                                             | [shared.CreateEmploymentApiModelSchemasPayPeriodValue](../../../sdk/models/shared/createemploymentapimodelschemaspayperiodvalue.md) | :heavy_minus_sign:                                                                                                                  | The pay period of the job postings.                                                                                                 | hour                                                                                                                                |