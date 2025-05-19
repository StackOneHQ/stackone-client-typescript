# TicketingTicketStatusValue

The type of this status

## Example Usage

```typescript
import { TicketingTicketStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketStatusValue = TicketingTicketStatusValue.ToDo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ToDo`                 | to-do                  |
| `InProgress`           | in-progress            |
| `Closed`               | closed                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |