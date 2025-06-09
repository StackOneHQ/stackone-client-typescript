# HrisUpdateEmployeeRequestDtoDurationUnit

The duration unit of the work time

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoDurationUnit,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoDurationUnit = {
  value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                 | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeSourceValue*                                                                                     | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `value`                                                                                                                                                       | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymentworktimevalue.md) | :heavy_minus_sign:                                                                                                                                            | The unified value for the period.                                                                                                                             | month                                                                                                                                                         |