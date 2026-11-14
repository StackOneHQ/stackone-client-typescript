# ScreeningResultStatus

Result status

## Example Usage

```typescript
import { ScreeningResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningResultStatus = ScreeningResultStatus.Completed;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| `Failed`               | failed                 |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |