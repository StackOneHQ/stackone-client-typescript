# TicketingTicketUpdateRequestDtoPriority

Priority of the ticket

## Example Usage

```typescript
import { TicketingTicketUpdateRequestDtoPriority, TicketingTicketUpdateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketUpdateRequestDtoPriority = {
  id: "001",
  sourceValue: "Normal",
  value: TicketingTicketUpdateRequestDtoValue.Medium,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The id of the ticket priority.                                                                                    | 001                                                                                                               |
| `sourceValue`                                                                                                     | *shared.TicketingTicketUpdateRequestDtoSourceValue*                                                               | :heavy_minus_sign:                                                                                                | The source value of the ticket priority.                                                                          | Normal                                                                                                            |
| `value`                                                                                                           | [shared.TicketingTicketUpdateRequestDtoValue](../../../sdk/models/shared/ticketingticketupdaterequestdtovalue.md) | :heavy_minus_sign:                                                                                                | The priority of the ticket.                                                                                       | medium                                                                                                            |