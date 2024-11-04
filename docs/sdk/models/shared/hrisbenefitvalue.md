# HRISBenefitValue

The type of the benefit

## Example Usage

```typescript
import { HRISBenefitValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBenefitValue = HRISBenefitValue.Insurance;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `RetirementSavings`    | retirement_savings     |
| `HealthSavings`        | health_savings         |
| `Other`                | other                  |
| `HealthInsurance`      | health_insurance       |
| `Insurance`            | insurance              |
| -                      | `Unrecognized<string>` |