# TimeOffPoliciesValue

The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown

## Example Usage

```typescript
import { TimeOffPoliciesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffPoliciesValue = TimeOffPoliciesValue.Hours;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minutes`              | minutes                |
| `Hours`                | hours                  |
| `Days`                 | days                   |
| `Weeks`                | weeks                  |
| `Months`               | months                 |
| `Years`                | years                  |
| `Unknown`              | unknown                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |