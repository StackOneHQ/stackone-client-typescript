# Role

The role of manager

## Example Usage

```typescript
import { EmploymentManagerApiModelValue, Role } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Role = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Admin",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  roleType: {
    value: EmploymentManagerApiModelValue.Admin,
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                      |
| `label`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The label of the role type                                | Admin                                                     |
| `remoteId`                                                | *string*                                                  | :heavy_minus_sign:                                        | Provider's unique identifier                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                      |
| `roleType`                                                | [shared.RoleType](../../../sdk/models/shared/roletype.md) | :heavy_minus_sign:                                        | The manager role type (e.g., admin, viewer)               | admin                                                     |