# LmsCreateAssignmentRequestDtoValue

The StackOne unified assignment status.

## Example Usage

```typescript
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateAssignmentRequestDtoValue =
  LmsCreateAssignmentRequestDtoValue.InProgress;

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