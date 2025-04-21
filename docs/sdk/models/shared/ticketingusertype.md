# TicketingUserType

## Example Usage

```typescript
import { TicketingUserType, TicketingUserValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserType = {
  sourceValue: "Live",
  value: TicketingUserValue.Agent,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.TicketingUserSourceValue*                                             | :heavy_minus_sign:                                                            | The source value of the user type.                                            | Live                                                                          |
| `value`                                                                       | [shared.TicketingUserValue](../../../sdk/models/shared/ticketinguservalue.md) | :heavy_minus_sign:                                                            | The type of the user.                                                         | agent                                                                         |