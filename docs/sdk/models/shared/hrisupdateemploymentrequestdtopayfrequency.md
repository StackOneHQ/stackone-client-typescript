# HrisUpdateEmploymentRequestDtoPayFrequency

How often the employee is paid

## Example Usage

```typescript
import {
  HrisUpdateEmploymentRequestDtoPayFrequency,
  HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoPayFrequency = {
  sourceValue: "Hourly",
  value: HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                         | *shared.HrisUpdateEmploymentRequestDtoSchemasPayFrequencySourceValue*                                                                                 | :heavy_minus_sign:                                                                                                                                    | The source value of the pay frequency.                                                                                                                | Hourly                                                                                                                                                |
| `value`                                                                                                                                               | [shared.HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue](../../../sdk/models/shared/hrisupdateemploymentrequestdtoschemaspayfrequencyvalue.md) | :heavy_minus_sign:                                                                                                                                    | The pay frequency of the job postings.                                                                                                                | hourly                                                                                                                                                |