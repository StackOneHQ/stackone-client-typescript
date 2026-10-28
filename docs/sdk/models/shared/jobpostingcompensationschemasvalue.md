# JobPostingCompensationSchemasValue

The pay period of the job postings.

## Example Usage

```typescript
import { JobPostingCompensationSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingCompensationSchemasValue =
  JobPostingCompensationSchemasValue.Hour;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Hour`                 | hour                   |
| `Day`                  | day                    |
| `Week`                 | week                   |
| `EveryTwoWeeks`        | every_two_weeks        |
| `Month`                | month                  |
| `TwiceAMonth`          | twice_a_month          |
| `EveryTwoMonths`       | every_two_months       |
| `Quarter`              | quarter                |
| `EverySixMonths`       | every_six_months       |
| `Year`                 | year                   |
| `OneOff`               | one_off                |
| `None`                 | none                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |