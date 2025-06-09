# HrisUpdateEmploymentRequestDtoDurationUnit

The duration unit of the work time

## Example Usage

```typescript
import {
  HrisUpdateEmploymentRequestDtoDurationUnit,
  HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoDurationUnit = {
  value: HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisUpdateEmploymentRequestDtoSchemasWorkTimeSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `value`                                                                                                                                       | [shared.HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue](../../../sdk/models/shared/hrisupdateemploymentrequestdtoschemasworktimevalue.md) | :heavy_minus_sign:                                                                                                                            | The unified value for the period.                                                                                                             | month                                                                                                                                         |