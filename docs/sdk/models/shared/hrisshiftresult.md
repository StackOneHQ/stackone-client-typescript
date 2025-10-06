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
    breaks: null,
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
      value: HrisShiftResultSchemasValue.Confirmed,
    },
    updatedAt: new Date("2024-03-20T08:00:00Z"),
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.HrisShiftResultData](../../../sdk/models/shared/hrisshiftresultdata.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `raw`                                                                           | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]               | :heavy_minus_sign:                                                              | N/A                                                                             |