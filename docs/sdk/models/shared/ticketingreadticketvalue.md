# TicketingReadTicketValue

The priority of the ticket.

## Example Usage

```typescript
import { TicketingReadTicketValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketValue = TicketingReadTicketValue.Medium;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Lowest`               | lowest                 |
| `Low`                  | low                    |
| `Medium`               | medium                 |
| `High`                 | high                   |
| `Highest`              | highest                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |