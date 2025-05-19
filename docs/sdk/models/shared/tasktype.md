# TaskType

The type of the task

## Example Usage

```typescript
import { TaskSchemasValue, TaskType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskType = {
  value: TaskSchemasValue.Action,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                  | *shared.TaskSchemasSourceValue*                                                                                                | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `value`                                                                                                                        | [shared.TaskSchemasValue](../../../sdk/models/shared/taskschemasvalue.md)                                                      | :heavy_minus_sign:                                                                                                             | The unified value for the type of the task. If the provider does not specify this type, the value will be set to UnmappedValue | action                                                                                                                         |