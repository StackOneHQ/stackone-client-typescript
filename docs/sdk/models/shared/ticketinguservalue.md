# TicketingUserValue

The type of the user.

## Example Usage

```typescript
import { TicketingUserValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserValue = TicketingUserValue.Agent;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Agent`                | agent                  |
| `Contact`              | contact                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |