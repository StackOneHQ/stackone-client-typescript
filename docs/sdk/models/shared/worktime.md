# WorkTime

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasWorkTimeValue, WorkTime } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: CreateEmploymentApiModelSchemasWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `duration`                                            | *string*                                              | :heavy_minus_sign:                                    | The work time duration in ISO 8601 duration format    | P0Y0M0DT8H0M0S                                        |
| `period`                                              | [shared.Period](../../../sdk/models/shared/period.md) | :heavy_minus_sign:                                    | The period of the work time                           | month                                                 |