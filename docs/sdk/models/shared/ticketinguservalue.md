# TicketingUserValue

The type of the user.

## Example Usage

```typescript
import { TicketingUserValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserValue = TicketingUserValue.Agent;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Agent`                | agent                  |
| `Contact`              | contact                |
| `Bot`                  | bot                    |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |