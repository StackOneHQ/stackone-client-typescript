# TaskResultStatus

The status of the task

## Example Usage

```typescript
import { TaskResultStatus, TaskResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskResultStatus = {
  value: TaskResultValue.Open,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                      | *shared.TaskResultSourceValue*                                                                                                     | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `value`                                                                                                                            | [shared.TaskResultValue](../../../sdk/models/shared/taskresultvalue.md)                                                            | :heavy_minus_sign:                                                                                                                 | The unified value for the status of the task. If the provider does not specify this status, the value will be set to UnmappedValue | open                                                                                                                               |