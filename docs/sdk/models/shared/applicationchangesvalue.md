# ApplicationChangesValue

The type of change that occurred to the application

## Example Usage

```typescript
import { ApplicationChangesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationChangesValue = ApplicationChangesValue.ApplicationStatus;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ApplicationStatus`    | application_status     |
| `InterviewStage`       | interview_stage        |
| `RejectedReasons`      | rejected_reasons       |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |