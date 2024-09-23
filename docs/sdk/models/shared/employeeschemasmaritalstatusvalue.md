# EmployeeSchemasMaritalStatusValue

## Example Usage

```typescript
import { EmployeeSchemasMaritalStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeSchemasMaritalStatusValue =
  EmployeeSchemasMaritalStatusValue.Other;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Single`               | single                 |
| `Married`              | married                |
| `CommonLaw`            | common_law             |
| `Divorced`             | divorced               |
| `Widowed`              | widowed                |
| `DomesticPartnership`  | domestic_partnership   |
| `Separated`            | separated              |
| `Other`                | other                  |
| `NotDisclosed`         | not_disclosed          |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |