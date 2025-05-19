# TicketingTicketResultStatus

Current status of the ticket

## Example Usage

```typescript
import { TicketingTicketResultSchemasValue, TicketingTicketResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultStatus = {
  id: "001",
  name: "Backlog",
  type: {
    sourceValue: "New",
    value: TicketingTicketResultSchemasValue.ToDo,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The id of the ticket status.                                                                              | 001                                                                                                       |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name of the ticket status.                                                                            | Backlog                                                                                                   |
| `type`                                                                                                    | [shared.TicketingTicketResultSchemasType](../../../sdk/models/shared/ticketingticketresultschemastype.md) | :heavy_minus_sign:                                                                                        | The type of this status                                                                                   |                                                                                                           |