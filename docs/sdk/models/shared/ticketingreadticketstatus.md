# TicketingReadTicketStatus

Current status of the ticket

## Example Usage

```typescript
import { TicketingReadTicketSchemasValue, TicketingReadTicketStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketStatus = {
  id: "001",
  sourceValue: "Backlog",
  value: TicketingReadTicketSchemasValue.ToDo,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The id of the ticket status.                                                                            | 001                                                                                                     |
| `sourceValue`                                                                                           | *shared.TicketingReadTicketSchemasSourceValue*                                                          | :heavy_minus_sign:                                                                                      | The source value of the ticket status.                                                                  | Backlog                                                                                                 |
| `value`                                                                                                 | [shared.TicketingReadTicketSchemasValue](../../../sdk/models/shared/ticketingreadticketschemasvalue.md) | :heavy_minus_sign:                                                                                      | The status of the ticket.                                                                               | to-do                                                                                                   |