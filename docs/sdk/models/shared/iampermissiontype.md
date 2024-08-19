# IamPermissionType

## Example Usage

```typescript
import { IamPermissionType, IamPermissionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPermissionType = {
    value: IamPermissionValue.ReadWrite,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.IamPermissionSourceValue*                                             | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `value`                                                                       | [shared.IamPermissionValue](../../../sdk/models/shared/iampermissionvalue.md) | :heavy_minus_sign:                                                            | The type of the permission, e.g. read, read_write, delete, etc.               | read_write                                                                    |