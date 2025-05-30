# TicketingUserResultValue

The type of the user.

## Example Usage

```typescript
import { TicketingUserResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserResultValue = TicketingUserResultValue.Agent;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Agent`                | agent                  |
| `Contact`              | contact                |
| `Bot`                  | bot                    |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |