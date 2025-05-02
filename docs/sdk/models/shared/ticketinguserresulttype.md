# TicketingUserResultType

## Example Usage

```typescript
import { TicketingUserResultType, TicketingUserResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserResultType = {
  sourceValue: "Live",
  value: TicketingUserResultValue.Agent,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.TicketingUserResultSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the user type.                                                        | Live                                                                                      |
| `value`                                                                                   | [shared.TicketingUserResultValue](../../../sdk/models/shared/ticketinguserresultvalue.md) | :heavy_minus_sign:                                                                        | The type of the user.                                                                     | agent                                                                                     |