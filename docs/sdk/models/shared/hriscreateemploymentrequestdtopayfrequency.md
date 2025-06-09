# HrisCreateEmploymentRequestDtoPayFrequency

The pay frequency

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoPayFrequency,
  HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoPayFrequency = {
  sourceValue: "Hourly",
  value: HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                         | *shared.HrisCreateEmploymentRequestDtoSchemasPayFrequencySourceValue*                                                                                 | :heavy_minus_sign:                                                                                                                                    | The source value of the pay frequency.                                                                                                                | Hourly                                                                                                                                                |
| `value`                                                                                                                                               | [shared.HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue](../../../sdk/models/shared/hriscreateemploymentrequestdtoschemaspayfrequencyvalue.md) | :heavy_minus_sign:                                                                                                                                    | The pay frequency of the job postings.                                                                                                                | hourly                                                                                                                                                |