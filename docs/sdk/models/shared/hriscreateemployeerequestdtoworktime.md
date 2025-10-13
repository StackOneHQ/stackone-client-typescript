# HrisCreateEmployeeRequestDtoWorkTime

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisCreateEmployeeRequestDtoWorkTime,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The work time duration in ISO 8601 duration format                                                            | P0Y0M0DT8H0M0S                                                                                                |
| `period`                                                                                                      | [shared.HrisCreateEmployeeRequestDtoPeriod](../../../sdk/models/shared/hriscreateemployeerequestdtoperiod.md) | :heavy_minus_sign:                                                                                            | The period of the work time                                                                                   | month                                                                                                         |