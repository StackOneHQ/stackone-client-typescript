# HrisCreateEmployeeRequestDtoPayFrequency

The pay frequency

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoPayFrequency,
  HrisCreateEmployeeRequestDtoSchemasEmploymentValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoPayFrequency = {
  sourceValue: "Hourly",
  value: HrisCreateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisCreateEmployeeRequestDtoSchemasEmploymentSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | The source value of the pay frequency.                                                                                                        | Hourly                                                                                                                                        |
| `value`                                                                                                                                       | [shared.HrisCreateEmployeeRequestDtoSchemasEmploymentValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasemploymentvalue.md) | :heavy_minus_sign:                                                                                                                            | The pay frequency of the job postings.                                                                                                        | hourly                                                                                                                                        |