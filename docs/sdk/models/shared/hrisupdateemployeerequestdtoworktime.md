# HrisUpdateEmployeeRequestDtoWorkTime

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisUpdateEmployeeRequestDtoWorkTime,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The work time duration in ISO 8601 duration format                                                            | P0Y0M0DT8H0M0S                                                                                                |
| `period`                                                                                                      | [shared.HrisUpdateEmployeeRequestDtoPeriod](../../../sdk/models/shared/hrisupdateemployeerequestdtoperiod.md) | :heavy_minus_sign:                                                                                            | The period of the work time                                                                                   | month                                                                                                         |