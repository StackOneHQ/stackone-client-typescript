# AssignmentSchemasStatusValue

The StackOne unified assignment status.

## Example Usage

```typescript
import { AssignmentSchemasStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentSchemasStatusValue =
  AssignmentSchemasStatusValue.InProgress;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |