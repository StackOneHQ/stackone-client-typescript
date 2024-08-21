# IamRoleValue

## Example Usage

```typescript
import { IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamRoleValue = IamRoleValue.Admin;
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