# TicketingTicketResultPriority

Priority of the ticket

## Example Usage

```typescript
import { TicketingTicketResultPriority, TicketingTicketResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultPriority = {
  id: "001",
  sourceValue: "Normal",
  value: TicketingTicketResultValue.Medium,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the ticket priority.                                                                | 001                                                                                           |
| `sourceValue`                                                                                 | *shared.TicketingTicketResultSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the ticket priority.                                                      | Normal                                                                                        |
| `value`                                                                                       | [shared.TicketingTicketResultValue](../../../sdk/models/shared/ticketingticketresultvalue.md) | :heavy_minus_sign:                                                                            | The priority of the ticket.                                                                   | medium                                                                                        |