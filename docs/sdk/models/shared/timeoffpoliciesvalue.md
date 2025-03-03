# TimeOffPoliciesValue

The unified value for the type of the time off policy. If the provider does not specify this unit, the value will be set to unmapped_value

## Example Usage

```typescript
import { TimeOffPoliciesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffPoliciesValue = TimeOffPoliciesValue.Holiday;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Paid`                 | paid                   |
| `Unpaid`               | unpaid                 |
| `Holiday`              | holiday                |
| `Vacation`             | vacation               |
| `Sick`                 | sick                   |
| `Personal`             | personal               |
| `InLieu`               | in_lieu                |
| `Bereavement`          | bereavement            |
| `JuryDuty`             | jury_duty              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |