# TaskResultType

The type of the task

## Example Usage

```typescript
import { TaskResultSchemasValue, TaskResultType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskResultType = {
  value: TaskResultSchemasValue.Action,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                  | *shared.TaskResultSchemasSourceValue*                                                                                          | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `value`                                                                                                                        | [shared.TaskResultSchemasValue](../../../sdk/models/shared/taskresultschemasvalue.md)                                          | :heavy_minus_sign:                                                                                                             | The unified value for the type of the task. If the provider does not specify this type, the value will be set to UnmappedValue | action                                                                                                                         |