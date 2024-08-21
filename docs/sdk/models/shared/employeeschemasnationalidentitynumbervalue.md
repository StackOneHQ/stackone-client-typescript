# EmployeeSchemasNationalIdentityNumberValue

The type of the national identity number

## Example Usage

```typescript
import { EmployeeSchemasNationalIdentityNumberValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeSchemasNationalIdentityNumberValue =
    EmployeeSchemasNationalIdentityNumberValue.Ssn;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Ssn`                  | ssn                    |
| `Nin`                  | nin                    |
| `Sin`                  | sin                    |
| `Other`                | other                  |
| `Unknown`              | unknown                |
| -                      | `Unrecognized<string>` |