# EmploymentSchemasCostCenterValue

## Example Usage

```typescript
import { EmploymentSchemasCostCenterValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentSchemasCostCenterValue =
  EmploymentSchemasCostCenterValue.Team;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Workspace`            | workspace              |
| `Team`                 | team                   |
| `Department`           | department             |
| `Group`                | group                  |
| `Organization`         | organization           |
| `UnmappedValue`        | unmapped_value         |
| `CostCenter`           | cost_center            |
| -                      | `Unrecognized<string>` |