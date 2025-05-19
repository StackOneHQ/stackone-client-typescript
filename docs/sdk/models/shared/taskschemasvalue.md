# TaskSchemasValue

The unified value for the type of the task. If the provider does not specify this type, the value will be set to UnmappedValue

## Example Usage

```typescript
import { TaskSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskSchemasValue = TaskSchemasValue.Action;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Action`               | action                 |
| `Review`               | review                 |
| `Acknowledgment`       | acknowledgment         |
| `Edit`                 | edit                   |
| `Approve`              | approve                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |