# IamRoleValue

## Example Usage

```typescript
import { IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamRoleValue = IamRoleValue.Admin;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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