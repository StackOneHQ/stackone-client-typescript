# TicketingTicketUpdateRequestDtoValue

The priority of the ticket.

## Example Usage

```typescript
import { TicketingTicketUpdateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketUpdateRequestDtoValue =
  TicketingTicketUpdateRequestDtoValue.Medium;

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