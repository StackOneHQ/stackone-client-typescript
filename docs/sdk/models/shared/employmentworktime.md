# EmploymentWorkTime

## Example Usage

```typescript
import { EmploymentSchemasWorkTimeValue, EmploymentWorkTime } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: EmploymentSchemasWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `duration`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | The work time duration in ISO 8601 duration format                        | P0Y0M0DT8H0M0S                                                            |
| `period`                                                                  | [shared.EmploymentPeriod](../../../sdk/models/shared/employmentperiod.md) | :heavy_minus_sign:                                                        | The period of the work time                                               | month                                                                     |