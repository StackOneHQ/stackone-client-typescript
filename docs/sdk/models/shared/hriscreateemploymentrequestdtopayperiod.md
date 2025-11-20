# HrisCreateEmploymentRequestDtoPayPeriod

The time period over which the pay rate is calculated

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoPayPeriod,
  HrisCreateEmploymentRequestDtoSchemasPayPeriodValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoPayPeriod = {
  sourceValue: "Hour",
  value: HrisCreateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                   | *shared.HrisCreateEmploymentRequestDtoSchemasPayPeriodSourceValue*                                                                              | :heavy_minus_sign:                                                                                                                              | The source value of the pay period.                                                                                                             | Hour                                                                                                                                            |
| `value`                                                                                                                                         | [shared.HrisCreateEmploymentRequestDtoSchemasPayPeriodValue](../../../sdk/models/shared/hriscreateemploymentrequestdtoschemaspayperiodvalue.md) | :heavy_minus_sign:                                                                                                                              | The pay period of the job postings.                                                                                                             | hour                                                                                                                                            |