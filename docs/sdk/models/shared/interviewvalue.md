# InterviewValue

The status of the interview.

## Example Usage

```typescript
import { InterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewValue = InterviewValue.Unscheduled;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Unscheduled`          | unscheduled            |
| `Scheduled`            | scheduled              |
| `Completed`            | completed              |
| `Cancelled`            | cancelled              |
| `PendingFeedback`      | pending_feedback       |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |