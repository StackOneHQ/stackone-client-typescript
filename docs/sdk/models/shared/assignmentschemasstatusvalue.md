# AssignmentSchemasStatusValue

The StackOne unified assignment status.

## Example Usage

```typescript
import { AssignmentSchemasStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentSchemasStatusValue =
  AssignmentSchemasStatusValue.InProgress;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |