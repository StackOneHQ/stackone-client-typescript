# HrisUpdateEmployeeTaskRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeTaskRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { UpdateTaskRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeTaskRequest = {
  updateTaskRequestDto: {
    comment: "All required documents have been submitted",
    status: {
      value: UpdateTaskRequestDtoValue.Open,
    },
  },
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `updateTaskRequestDto`                                                            | [shared.UpdateTaskRequestDto](../../../sdk/models/shared/updatetaskrequestdto.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `subResourceId`                                                                   | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `xAccountId`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | The account identifier                                                            |