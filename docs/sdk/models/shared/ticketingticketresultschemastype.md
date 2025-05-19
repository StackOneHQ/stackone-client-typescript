# TicketingTicketResultSchemasType

The type of this status

## Example Usage

```typescript
import { TicketingTicketResultSchemasType, TicketingTicketResultSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultSchemasType = {
  sourceValue: "New",
  value: TicketingTicketResultSchemasValue.ToDo,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                               | *shared.TicketingTicketResultSchemasSourceValue*                                                            | :heavy_minus_sign:                                                                                          | The source value of this status type                                                                        | New                                                                                                         |
| `value`                                                                                                     | [shared.TicketingTicketResultSchemasValue](../../../sdk/models/shared/ticketingticketresultschemasvalue.md) | :heavy_minus_sign:                                                                                          | The type of this status                                                                                     | to-do                                                                                                       |