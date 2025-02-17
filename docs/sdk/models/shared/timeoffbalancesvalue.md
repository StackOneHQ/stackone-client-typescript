# TimeOffBalancesValue

## Example Usage

```typescript
import { TimeOffBalancesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesValue = TimeOffBalancesValue.Minutes;
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
| -                      | `Unrecognized<string>` |