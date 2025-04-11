# TicketingReadTicketSchemasValue

The status of the ticket.

## Example Usage

```typescript
import { TicketingReadTicketSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketSchemasValue =
  TicketingReadTicketSchemasValue.ToDo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ToDo`                 | to-do                  |
| `InProgress`           | in-progress            |
| `Closed`               | closed                 |
| -                      | `Unrecognized<string>` |