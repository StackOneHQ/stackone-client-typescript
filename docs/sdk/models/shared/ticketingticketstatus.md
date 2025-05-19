# TicketingTicketStatus

## Example Usage

```typescript
import { TicketingTicketStatus, TicketingTicketStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketStatus = {
  id: "001",
  name: "Backlog",
  type: {
    sourceValue: "New",
    value: TicketingTicketStatusValue.ToDo,
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | The id of the ticket status.                                                                | 001                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name of the ticket status.                                                              | Backlog                                                                                     |
| `type`                                                                                      | [shared.TicketingTicketStatusType](../../../sdk/models/shared/ticketingticketstatustype.md) | :heavy_minus_sign:                                                                          | The type of this status                                                                     |                                                                                             |