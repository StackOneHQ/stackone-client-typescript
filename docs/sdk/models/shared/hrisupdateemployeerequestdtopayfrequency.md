# HrisUpdateEmployeeRequestDtoPayFrequency

The pay frequency

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoPayFrequency,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoPayFrequency = {
  sourceValue: "Hourly",
  value: HrisUpdateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | The source value of the pay frequency.                                                                                                        | Hourly                                                                                                                                        |
| `value`                                                                                                                                       | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymentvalue.md) | :heavy_minus_sign:                                                                                                                            | The pay frequency of the job postings.                                                                                                        | hourly                                                                                                                                        |