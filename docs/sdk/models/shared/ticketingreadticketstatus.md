# TicketingReadTicketStatus

Current status of the ticket

## Example Usage

```typescript
import { TicketingReadTicketSchemasValue, TicketingReadTicketStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketStatus = {
  id: "001",
  name: "Backlog",
  type: {
    sourceValue: "New",
    value: TicketingReadTicketSchemasValue.ToDo,
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The id of the ticket status.                                                                          | 001                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the ticket status.                                                                        | Backlog                                                                                               |
| `type`                                                                                                | [shared.TicketingReadTicketSchemasType](../../../sdk/models/shared/ticketingreadticketschemastype.md) | :heavy_minus_sign:                                                                                    | The type of this status                                                                               |                                                                                                       |