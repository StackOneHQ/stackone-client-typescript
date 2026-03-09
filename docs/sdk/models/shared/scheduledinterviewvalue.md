# ScheduledInterviewValue

The status of the interview.

## Example Usage

```typescript
import { ScheduledInterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScheduledInterviewValue = ScheduledInterviewValue.Unscheduled;

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