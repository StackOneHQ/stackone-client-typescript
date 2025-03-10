# TimeOffBalancesSchemasValue

The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown

## Example Usage

```typescript
import { TimeOffBalancesSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesSchemasValue = TimeOffBalancesSchemasValue.Hours;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minutes`              | minutes                |
| `Hours`                | hours                  |
| `Days`                 | days                   |
| `Weeks`                | weeks                  |
| `Months`               | months                 |
| `Years`                | years                  |
| `Unknown`              | unknown                |
| -                      | `Unrecognized<string>` |