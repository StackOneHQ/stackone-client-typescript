# HrisCreateEmployeeRequestDtoPayPeriod

The time period over which the pay rate is calculated

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoPayPeriod,
  HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoPayPeriod = {
  sourceValue: "Hour",
  value: HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                   | *shared.HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodSourceValue*                                                                                      | :heavy_minus_sign:                                                                                                                                              | The source value of the pay period.                                                                                                                             | Hour                                                                                                                                                            |
| `value`                                                                                                                                                         | [shared.HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasemploymentpayperiodvalue.md) | :heavy_minus_sign:                                                                                                                                              | The pay period of the job postings.                                                                                                                             | hour                                                                                                                                                            |