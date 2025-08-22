# UpdateTaskRequestDtoStatus

The status to apply to this Task

## Example Usage

```typescript
import { UpdateTaskRequestDtoStatus, UpdateTaskRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateTaskRequestDtoStatus = {
  value: UpdateTaskRequestDtoValue.Open,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                      | *shared.UpdateTaskRequestDtoSourceValue*                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `value`                                                                                                                            | [shared.UpdateTaskRequestDtoValue](../../../sdk/models/shared/updatetaskrequestdtovalue.md)                                        | :heavy_minus_sign:                                                                                                                 | The unified value for the status of the task. If the provider does not specify this status, the value will be set to UnmappedValue | open                                                                                                                               |