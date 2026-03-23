# IamResourceValue

The type of the resource, e.g. user, group, permission, etc.

## Example Usage

```typescript
import { IamResourceValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamResourceValue = IamResourceValue.File;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Project`              | project                |
| `File`                 | file                   |
| `Folder`               | folder                 |
| `Product`              | product                |
| `Property`             | property               |
| `User`                 | user                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |