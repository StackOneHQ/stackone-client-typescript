# HrisCreateTimeOffRequestRequest

## Example Usage

```typescript
import { HrisCreateTimeOffRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisCreateTimeOffRequestRequest = {
  hrisCreateTimeOffRequestDto: {
    approverId: "1687-4",
    employeeId: "1687-3",
    endDate: new Date("2021-01-01T01:01:01.000Z"),
    endHalfDay: true,
    passthrough: {
      "other_known_names": "John Doe",
    },
    startDate: new Date("2021-01-01T01:01:01.000Z"),
    startHalfDay: true,
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `hrisCreateTimeOffRequestDto`                                                                   | [shared.HrisCreateTimeOffRequestDto](../../../sdk/models/shared/hriscreatetimeoffrequestdto.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `xAccountId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The account identifier                                                                          |