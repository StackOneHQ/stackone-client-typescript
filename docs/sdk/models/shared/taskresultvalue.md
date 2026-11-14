# TaskResultValue

The unified value for the status of the task. If the provider does not specify this status, the value will be set to UnmappedValue

## Example Usage

```typescript
import { TaskResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskResultValue = TaskResultValue.Open;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Open`                 | open                   |
| `InProgress`           | in_progress            |
| `Blocked`              | blocked                |
| `Completed`            | completed              |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |