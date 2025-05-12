# TicketingTicketResultValue

The priority of the ticket.

## Example Usage

```typescript
import { TicketingTicketResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultValue = TicketingTicketResultValue.Medium;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Lowest`               | lowest                 |
| `Low`                  | low                    |
| `Medium`               | medium                 |
| `High`                 | high                   |
| `Highest`              | highest                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |