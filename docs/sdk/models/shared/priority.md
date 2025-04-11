# Priority

Priority of the ticket

## Example Usage

```typescript
import { Priority, TicketingReadTicketValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Priority = {
  id: "001",
  sourceValue: "Normal",
  value: TicketingReadTicketValue.Medium,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | The id of the ticket priority.                                                            | 001                                                                                       |
| `sourceValue`                                                                             | *shared.TicketingReadTicketSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the ticket priority.                                                  | Normal                                                                                    |
| `value`                                                                                   | [shared.TicketingReadTicketValue](../../../sdk/models/shared/ticketingreadticketvalue.md) | :heavy_minus_sign:                                                                        | The priority of the ticket.                                                               | medium                                                                                    |