# HrisUpdateEmploymentRequestDtoPeriod

The period of the work time

## Example Usage

```typescript
import {
  HrisUpdateEmploymentRequestDtoPeriod,
  HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoPeriod = {
  value: HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisUpdateEmploymentRequestDtoSchemasWorkTimeSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `value`                                                                                                                                       | [shared.HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue](../../../sdk/models/shared/hrisupdateemploymentrequestdtoschemasworktimevalue.md) | :heavy_minus_sign:                                                                                                                            | The unified value for the period.                                                                                                             | month                                                                                                                                         |