# InterviewValue

The status of the interview.

## Example Usage

```typescript
import { InterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewValue = InterviewValue.Unscheduled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Unscheduled`          | unscheduled            |
| `Scheduled`            | scheduled              |
| `Completed`            | completed              |
| `Cancelled`            | cancelled              |
| `PendingFeedback`      | pending_feedback       |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |