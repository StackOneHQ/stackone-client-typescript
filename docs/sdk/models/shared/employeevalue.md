# EmployeeValue

## Example Usage

```typescript
import { EmployeeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeValue = EmployeeValue.UnmappedValue;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `FullTime`             | full_time              |
| `Shifts`               | shifts                 |
| `PartTime`             | part_time              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |