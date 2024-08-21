# IamPermissionValue

The type of the permission, e.g. read, read_write, delete, etc.

## Example Usage

```typescript
import { IamPermissionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPermissionValue = IamPermissionValue.ReadWrite;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Read`                 | read                   |
| `ReadWrite`            | read_write             |
| `Approve`              | approve                |
| `Delete`               | delete                 |
| `Use`                  | use                    |
| `Export`               | export                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |