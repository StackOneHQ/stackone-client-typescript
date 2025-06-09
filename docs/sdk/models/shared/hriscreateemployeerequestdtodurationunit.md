# HrisCreateEmployeeRequestDtoDurationUnit

The duration unit of the work time

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoDurationUnit,
  HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoDurationUnit = {
  value: HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                 | *shared.HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeSourceValue*                                                                                     | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `value`                                                                                                                                                       | [shared.HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasemploymentworktimevalue.md) | :heavy_minus_sign:                                                                                                                                            | The unified value for the period.                                                                                                                             | month                                                                                                                                                         |