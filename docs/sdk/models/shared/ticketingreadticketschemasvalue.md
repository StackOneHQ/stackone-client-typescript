# TicketingReadTicketSchemasValue

The type of this status

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
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |