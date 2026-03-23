# JobPostingCompensationSchemasTypeValue

The type of the compensation.

## Example Usage

```typescript
import { JobPostingCompensationSchemasTypeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensationSchemasTypeValue =
  JobPostingCompensationSchemasTypeValue.Salary;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Salary`               | salary                 |
| `Hourly`               | hourly                 |
| `Commission`           | commission             |
| `Bonus`                | bonus                  |
| `Equity`               | equity                 |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |