# HrisUpdateEmployeeTimeOffRequestRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeTimeOffRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisUpdateEmployeeTimeOffRequestRequest = {
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