# HrisShiftResult

## Example Usage

```typescript
import { HrisShiftResult, HrisShiftResultSchemasValue, HrisShiftResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftResult = {
  data: {
    approvalStatus: {
      sourceValue: "Approved",
      value: HrisShiftResultValue.Approved,
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
    endTime: new Date("2024-03-20T17:00:00Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    locationId: "loc_123456789",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    startTime: new Date("2024-03-20T09:00:00Z"),
    status: {
      sourceValue: "Confirmed",
      value: HrisShiftResultSchemasValue.Confirmed,
    },
    updatedAt: new Date("2024-03-20T08:00:00Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Data](../../../sdk/models/shared/data.md)                 | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |