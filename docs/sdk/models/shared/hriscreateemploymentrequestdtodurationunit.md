# HrisCreateEmploymentRequestDtoDurationUnit

The duration unit of the work time

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoDurationUnit,
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoDurationUnit = {
  value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisCreateEmploymentRequestDtoSchemasWorkTimeSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `value`                                                                                                                                       | [shared.HrisCreateEmploymentRequestDtoSchemasWorkTimeValue](../../../sdk/models/shared/hriscreateemploymentrequestdtoschemasworktimevalue.md) | :heavy_minus_sign:                                                                                                                            | The unified value for the period.                                                                                                             | month                                                                                                                                         |