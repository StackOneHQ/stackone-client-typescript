# HrisCreateEmploymentRequestDtoPeriod

The period of the work time

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoPeriod,
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoPeriod = {
  value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                 | *shared.HrisCreateEmploymentRequestDtoSchemasWorkTimeSourceValue*                                                                             | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `value`                                                                                                                                       | [shared.HrisCreateEmploymentRequestDtoSchemasWorkTimeValue](../../../sdk/models/shared/hriscreateemploymentrequestdtoschemasworktimevalue.md) | :heavy_minus_sign:                                                                                                                            | The unified value for the period.                                                                                                             | month                                                                                                                                         |