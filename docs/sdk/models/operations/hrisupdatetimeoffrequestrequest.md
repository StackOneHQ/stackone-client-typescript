# HrisUpdateTimeOffRequestRequest

## Example Usage

```typescript
import { HrisUpdateTimeOffRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HrisCreateTimeOffRequestDto2, HrisCreateTimeOffRequestDtoSchemas2 } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateTimeOffRequestRequest = {
    hrisCreateTimeOffRequestDto: {
        approverId: "1687-4",
        employeeId: "1687-3",
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        endHalfDay: HrisCreateTimeOffRequestDto2.True,
        passthrough: {
            other_known_names: "John Doe",
        },
        startDate: new Date("2021-01-01T01:01:01.000Z"),
        startHalfDay: HrisCreateTimeOffRequestDtoSchemas2.True,
    },
    id: "<id>",
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `hrisCreateTimeOffRequestDto`                                                                   | [shared.HrisCreateTimeOffRequestDto](../../../sdk/models/shared/hriscreatetimeoffrequestdto.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `xAccountId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The account identifier                                                                          |