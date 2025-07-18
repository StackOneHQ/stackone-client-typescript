# HrisCreateEmployeeTimeOffRequestRequest

## Example Usage

```typescript
import { HrisCreateEmployeeTimeOffRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisCreateEmployeeTimeOffRequestRequest = {
  hrisCreateTimeOffRequestDto: {
    approverId: "1687-4",
    comment: "Taking a day off for personal reasons",
    endDate: "2021-01-01T01:01:01.000",
    endHalfDay: true,
    passthrough: {
      "other_known_names": "John Doe",
    },
    reason: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    startDate: "2021-01-01T01:01:01.000",
    startHalfDay: true,
    timeOffPolicyId: "cx280928933",
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `hrisCreateTimeOffRequestDto`                                                                   | [shared.HrisCreateTimeOffRequestDto](../../../sdk/models/shared/hriscreatetimeoffrequestdto.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `xAccountId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The account identifier                                                                          |