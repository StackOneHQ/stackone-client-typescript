# HRISGroupValue

## Example Usage

```typescript
import { HRISGroupValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISGroupValue = HRISGroupValue.Team;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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