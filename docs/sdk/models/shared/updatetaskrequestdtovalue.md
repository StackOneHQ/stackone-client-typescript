# UpdateTaskRequestDtoValue

The unified value for the status of the task. If the provider does not specify this status, the value will be set to UnmappedValue

## Example Usage

```typescript
import { UpdateTaskRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateTaskRequestDtoValue = UpdateTaskRequestDtoValue.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Open`                 | open                   |
| `InProgress`           | in_progress            |
| `Blocked`              | blocked                |
| `Completed`            | completed              |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |