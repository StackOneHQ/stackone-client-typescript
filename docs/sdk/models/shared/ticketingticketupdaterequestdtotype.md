# TicketingTicketUpdateRequestDtoType

The type of this status

## Example Usage

```typescript
import { TicketingTicketUpdateRequestDtoSchemasValue, TicketingTicketUpdateRequestDtoType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketUpdateRequestDtoType = {
  sourceValue: "New",
  value: TicketingTicketUpdateRequestDtoSchemasValue.ToDo,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                   | *shared.TicketingTicketUpdateRequestDtoSchemasSourceValue*                                                                      | :heavy_minus_sign:                                                                                                              | The source value of this status type                                                                                            | New                                                                                                                             |
| `value`                                                                                                                         | [shared.TicketingTicketUpdateRequestDtoSchemasValue](../../../sdk/models/shared/ticketingticketupdaterequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                                              | The type of this status                                                                                                         | to-do                                                                                                                           |