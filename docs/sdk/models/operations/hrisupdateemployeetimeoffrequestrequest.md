# HrisUpdateEmployeeTimeOffRequestRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeTimeOffRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisUpdateEmployeeTimeOffRequestRequest = {
  hrisCreateTimeOffRequestDto: {
    approverId: "1687-4",
    employeeId: "1687-3",
    endDate: new Date("2021-01-01T01:01:01.000Z"),
    endHalfDay: true,
    passthrough: {
      "other_known_names": "John Doe",
    },
    reason: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    startDate: new Date("2021-01-01T01:01:01.000Z"),
    startHalfDay: true,
    timeOffPolicyId: "cx280928933",
  },
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `hrisCreateTimeOffRequestDto`                                                                   | [shared.HrisCreateTimeOffRequestDto](../../../sdk/models/shared/hriscreatetimeoffrequestdto.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `subResourceId`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `xAccountId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The account identifier                                                                          |