# IamResourceValue

The type of the resource, e.g. user, group, permission, etc.

## Example Usage

```typescript
import { IamResourceValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamResourceValue = IamResourceValue.File;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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