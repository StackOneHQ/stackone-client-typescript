# TaskResultSchemasValue

The unified value for the type of the task. If the provider does not specify this type, the value will be set to UnmappedValue

## Example Usage

```typescript
import { TaskResultSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskResultSchemasValue = TaskResultSchemasValue.Action;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Action`               | action                 |
| `Review`               | review                 |
| `Acknowledgment`       | acknowledgment         |
| `Edit`                 | edit                   |
| `Approve`              | approve                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |