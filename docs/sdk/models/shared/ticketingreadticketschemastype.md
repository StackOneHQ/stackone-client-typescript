# TicketingReadTicketSchemasType

The type of this status

## Example Usage

```typescript
import { TicketingReadTicketSchemasType, TicketingReadTicketSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketSchemasType = {
  sourceValue: "New",
  value: TicketingReadTicketSchemasValue.ToDo,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                           | *shared.TicketingReadTicketSchemasSourceValue*                                                          | :heavy_minus_sign:                                                                                      | The source value of this status type                                                                    | New                                                                                                     |
| `value`                                                                                                 | [shared.TicketingReadTicketSchemasValue](../../../sdk/models/shared/ticketingreadticketschemasvalue.md) | :heavy_minus_sign:                                                                                      | The type of this status                                                                                 | to-do                                                                                                   |