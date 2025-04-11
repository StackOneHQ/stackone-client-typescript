# TicketingTicketCreateRequestDtoPriority

Priority of the ticket

## Example Usage

```typescript
import { TicketingTicketCreateRequestDtoPriority, TicketingTicketCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketCreateRequestDtoPriority = {
  id: "001",
  sourceValue: "Normal",
  value: TicketingTicketCreateRequestDtoValue.Medium,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The id of the ticket priority.                                                                                    | 001                                                                                                               |
| `sourceValue`                                                                                                     | *shared.TicketingTicketCreateRequestDtoSourceValue*                                                               | :heavy_minus_sign:                                                                                                | The source value of the ticket priority.                                                                          | Normal                                                                                                            |
| `value`                                                                                                           | [shared.TicketingTicketCreateRequestDtoValue](../../../sdk/models/shared/ticketingticketcreaterequestdtovalue.md) | :heavy_minus_sign:                                                                                                | The priority of the ticket.                                                                                       | medium                                                                                                            |