# LmsCreateAssignmentRequestDtoValue

## Example Usage

```typescript
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateAssignmentRequestDtoValue =
  LmsCreateAssignmentRequestDtoValue.Completed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| -                      | `Unrecognized<string>` |