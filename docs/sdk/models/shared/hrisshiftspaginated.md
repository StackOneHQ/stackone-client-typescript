# HrisShiftsPaginated

## Example Usage

```typescript
import { HrisShiftsPaginated, HrisShiftValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftsPaginated = {
  data: [
    {
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
      status: null,
      updatedAt: new Date("2024-03-20T08:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.HrisShift](../../../sdk/models/shared/hrisshift.md)[]     | :heavy_minus_sign:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |