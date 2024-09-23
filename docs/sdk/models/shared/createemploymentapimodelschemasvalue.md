# CreateEmploymentApiModelSchemasValue

The type of the employment.

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateEmploymentApiModelSchemasValue =
  CreateEmploymentApiModelSchemasValue.Permanent;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Contractor`           | contractor             |
| `Intern`               | intern                 |
| `Permanent`            | permanent              |
| `Apprentice`           | apprentice             |
| `Freelance`            | freelance              |
| `Terminated`           | terminated             |
| `Temporary`            | temporary              |
| `Seasonal`             | seasonal               |
| `Volunteer`            | volunteer              |
| `Probation`            | probation              |
| `Internal`             | internal               |
| `External`             | external               |
| `Expatriate`           | expatriate             |
| `EmployerOfRecord`     | employer_of_record     |
| `Casual`               | casual                 |
| `Programme`            | Programme              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |