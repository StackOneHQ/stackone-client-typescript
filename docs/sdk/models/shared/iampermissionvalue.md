# IamPermissionValue

The type of the permission, e.g. read, read_write, delete, etc.

## Example Usage

```typescript
import { IamPermissionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPermissionValue = IamPermissionValue.ReadWrite;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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