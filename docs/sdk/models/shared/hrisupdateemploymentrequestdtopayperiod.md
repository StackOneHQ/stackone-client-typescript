# HrisUpdateEmploymentRequestDtoPayPeriod

The pay period

## Example Usage

```typescript
import {
  HrisUpdateEmploymentRequestDtoPayPeriod,
  HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoPayPeriod = {
  sourceValue: "Hour",
  value: HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                   | *shared.HrisUpdateEmploymentRequestDtoSchemasPayPeriodSourceValue*                                                                              | :heavy_minus_sign:                                                                                                                              | The source value of the pay period.                                                                                                             | Hour                                                                                                                                            |
| `value`                                                                                                                                         | [shared.HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue](../../../sdk/models/shared/hrisupdateemploymentrequestdtoschemaspayperiodvalue.md) | :heavy_minus_sign:                                                                                                                              | The pay period of the job postings.                                                                                                             | hour                                                                                                                                            |