# UpdateEmployeeApiModelSchemasEmploymentValue

The pay frequency of the job postings.

## Example Usage

```typescript
import { UpdateEmployeeApiModelSchemasEmploymentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateEmployeeApiModelSchemasEmploymentValue =
  UpdateEmployeeApiModelSchemasEmploymentValue.Hourly;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Hourly`               | hourly                 |
| `Weekly`               | weekly                 |
| `BiWeekly`             | bi_weekly              |
| `FourWeekly`           | four_weekly            |
| `SemiMonthly`          | semi_monthly           |
| `Monthly`              | monthly                |
| `BiMonthly`            | bi_monthly             |
| `Quarterly`            | quarterly              |
| `SemiAnnually`         | semi_annually          |
| `Yearly`               | yearly                 |
| `ThirteenMonthly`      | thirteen_monthly       |
| `ProRata`              | pro_rata               |
| `UnmappedValue`        | unmapped_value         |
| `HalfYearly`           | half_yearly            |
| `Daily`                | daily                  |
| -                      | `Unrecognized<string>` |