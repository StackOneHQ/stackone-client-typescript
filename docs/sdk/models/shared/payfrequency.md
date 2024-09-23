# PayFrequency

The pay frequency

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasPayFrequencyValue, PayFrequency } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PayFrequency = {
  sourceValue: "Hourly",
  value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                             | *shared.CreateEmploymentApiModelSchemasPayFrequencySourceValue*                                                                           | :heavy_minus_sign:                                                                                                                        | The source value of the pay frequency.                                                                                                    | Hourly                                                                                                                                    |
| `value`                                                                                                                                   | [shared.CreateEmploymentApiModelSchemasPayFrequencyValue](../../../sdk/models/shared/createemploymentapimodelschemaspayfrequencyvalue.md) | :heavy_minus_sign:                                                                                                                        | The pay frequency of the job postings.                                                                                                    | hourly                                                                                                                                    |