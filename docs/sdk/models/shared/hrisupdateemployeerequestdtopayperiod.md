# HrisUpdateEmployeeRequestDtoPayPeriod

The time period over which the pay rate is calculated

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoPayPeriod,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoPayPeriod = {
  sourceValue: "Hour",
  value: HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                   | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodSourceValue*                                                                                      | :heavy_minus_sign:                                                                                                                                              | The source value of the pay period.                                                                                                                             | Hour                                                                                                                                                            |
| `value`                                                                                                                                                         | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymentpayperiodvalue.md) | :heavy_minus_sign:                                                                                                                                              | The pay period of the job postings.                                                                                                                             | hour                                                                                                                                                            |