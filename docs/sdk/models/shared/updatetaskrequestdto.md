# UpdateTaskRequestDto

## Example Usage

```typescript
import { UpdateTaskRequestDto, UpdateTaskRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateTaskRequestDto = {
  comment: "All required documents have been submitted",
  status: {
    value: UpdateTaskRequestDtoValue.Open,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `comment`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Comment or note about the task update                                                         | All required documents have been submitted                                                    |
| `status`                                                                                      | [shared.UpdateTaskRequestDtoStatus](../../../sdk/models/shared/updatetaskrequestdtostatus.md) | :heavy_minus_sign:                                                                            | The status to apply to this Task                                                              | blocked                                                                                       |