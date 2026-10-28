# HRISBenefitValue

The type of the benefit

## Example Usage

```typescript
import { HRISBenefitValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBenefitValue = HRISBenefitValue.HealthInsurance;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `RetirementSavings`    | retirement_savings     |
| `HealthSavings`        | health_savings         |
| `Other`                | other                  |
| `HealthInsurance`      | health_insurance       |
| `Insurance`            | insurance              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |