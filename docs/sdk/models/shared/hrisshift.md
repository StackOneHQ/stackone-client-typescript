# HrisShift

## Example Usage

```typescript
import { HrisShift, HrisShiftSchemasValue, HrisShiftValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShift = {
  approvalStatus: {
    sourceValue: "Approved",
    value: HrisShiftValue.Approved,
  },
  breakDuration: "PT1H30M",
  breaks: [
    {
      createdAt: new Date("2024-03-20T10:00:00Z"),
      duration: "PT1H",
      endTime: new Date("2024-03-20T13:00:00Z"),
      id: "break_123456789",
      isPaid: true,
      startTime: new Date("2024-03-20T12:00:00Z"),
      updatedAt: new Date("2024-03-20T10:00:00Z"),
    },
  ],
  companyId: "comp_123456789",
  createdAt: new Date("2024-03-20T08:00:00Z"),
  employeeId: "emp_123456789",
  endTime: "2024-03-20T17:00:00.000",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  locationId: "loc_123456789",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  startTime: "2024-03-20T09:00:00.000",
  status: {
    sourceValue: "Confirmed",
    value: HrisShiftSchemasValue.Confirmed,
  },
  updatedAt: new Date("2024-03-20T08:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `approvalStatus`                                                                              | [shared.ApprovalStatus](../../../sdk/models/shared/approvalstatus.md)                         | :heavy_minus_sign:                                                                            | The approval status of the shift                                                              |                                                                                               |
| `breakDuration`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The total break duration for this shift in ISO 8601 duration format                           | PT1H30M                                                                                       |
| `breaks`                                                                                      | [shared.ShiftBreak](../../../sdk/models/shared/shiftbreak.md)[]                               | :heavy_minus_sign:                                                                            | The breaks taken during this shift                                                            |                                                                                               |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The company ID associated with this shift                                                     | comp_123456789                                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the shift was created                                                       | 2024-03-20T08:00:00Z                                                                          |
| `employeeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The employee ID associated with this shift                                                    | emp_123456789                                                                                 |
| `endTime`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The end time of the shift (ISO8601 date-time without timezone)                                | 2024-03-20T17:00:00.000                                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `locationId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The location ID where this shift takes place                                                  | loc_123456789                                                                                 |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `startTime`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The start time of the shift (ISO8601 date-time without timezone)                              | 2024-03-20T09:00:00.000                                                                       |
| `status`                                                                                      | [shared.HrisShiftStatus](../../../sdk/models/shared/hrisshiftstatus.md)                       | :heavy_minus_sign:                                                                            | The status of the shift                                                                       |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the shift was last updated                                                  | 2024-03-20T08:00:00Z                                                                          |