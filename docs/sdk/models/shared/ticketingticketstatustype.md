# TicketingTicketStatusType

The type of this status

## Example Usage

```typescript
import { TicketingTicketStatusType, TicketingTicketStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketStatusType = {
  sourceValue: "New",
  value: TicketingTicketStatusValue.ToDo,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.TicketingTicketStatusSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of this status type                                                          | New                                                                                           |
| `value`                                                                                       | [shared.TicketingTicketStatusValue](../../../sdk/models/shared/ticketingticketstatusvalue.md) | :heavy_minus_sign:                                                                            | The type of this status                                                                       | to-do                                                                                         |