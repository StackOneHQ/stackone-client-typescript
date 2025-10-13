# HrisUpdateEmployeeRequestDtoPeriod

The period of the work time

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoPeriod,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoPeriod = {
  value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                 | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeSourceValue*                                                                                     | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `value`                                                                                                                                                       | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymentworktimevalue.md) | :heavy_minus_sign:                                                                                                                                            | The unified value for the period.                                                                                                                             | month                                                                                                                                                         |