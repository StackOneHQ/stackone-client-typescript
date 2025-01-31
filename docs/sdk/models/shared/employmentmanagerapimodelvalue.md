# EmploymentManagerApiModelValue

## Example Usage

```typescript
import { EmploymentManagerApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentManagerApiModelValue =
  EmploymentManagerApiModelValue.Admin;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Admin`                | admin                  |
| `Viewer`               | viewer                 |
| `Editor`               | editor                 |
| `Basic`                | basic                  |
| `Guest`                | guest                  |
| `Unassigned`           | unassigned             |
| `Restricted`           | restricted             |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |