# AssignmentSchemasValue

## Example Usage

```typescript
import { AssignmentSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentSchemasValue = AssignmentSchemasValue.Completed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| -                      | `Unrecognized<string>` |