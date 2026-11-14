# OrderBy

The field to order the results by

## Example Usage

```typescript
import { OrderBy } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OrderBy = OrderBy.EndTime;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StartTime`            | start_time             |
| `EndTime`              | end_time               |
| `EventTime`            | event_time             |
| `DurationMs`           | duration_ms            |
| -                      | `Unrecognized<string>` |