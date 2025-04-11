# TicketingTicketResultStatus

Current status of the ticket

## Example Usage

```typescript
import { TicketingTicketResultSchemasValue, TicketingTicketResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultStatus = {
  id: "001",
  sourceValue: "Backlog",
  value: TicketingTicketResultSchemasValue.ToDo,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The id of the ticket status.                                                                                | 001                                                                                                         |
| `sourceValue`                                                                                               | *shared.TicketingTicketResultSchemasSourceValue*                                                            | :heavy_minus_sign:                                                                                          | The source value of the ticket status.                                                                      | Backlog                                                                                                     |
| `value`                                                                                                     | [shared.TicketingTicketResultSchemasValue](../../../sdk/models/shared/ticketingticketresultschemasvalue.md) | :heavy_minus_sign:                                                                                          | The status of the ticket.                                                                                   | to-do                                                                                                       |