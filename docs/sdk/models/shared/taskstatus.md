# TaskStatus

The status of the task

## Example Usage

```typescript
import { TaskStatus, TaskValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskStatus = {
  value: TaskValue.Open,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                      | *shared.TaskSourceValue*                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `value`                                                                                                                            | [shared.TaskValue](../../../sdk/models/shared/taskvalue.md)                                                                        | :heavy_minus_sign:                                                                                                                 | The unified value for the status of the task. If the provider does not specify this status, the value will be set to UnmappedValue | open                                                                                                                               |