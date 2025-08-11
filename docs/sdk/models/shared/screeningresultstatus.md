# ScreeningResultStatus

Result status

## Example Usage

```typescript
import { ScreeningResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningResultStatus = ScreeningResultStatus.Completed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `InProgress`           | in_progress            |
| `Completed`            | completed              |
| `Failed`               | failed                 |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |