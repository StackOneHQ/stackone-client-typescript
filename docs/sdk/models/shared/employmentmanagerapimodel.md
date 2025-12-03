# EmploymentManagerApiModel

## Example Usage

```typescript
import { EmploymentManagerApiModel, EmploymentManagerApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentManagerApiModel = {
  email: "john.doe@example.com",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "John Doe",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  role: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    label: "Admin",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    roleType: {
      value: EmploymentManagerApiModelValue.Admin,
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `email`                                           | *string*                                          | :heavy_minus_sign:                                | The manager email                                 | john.doe@example.com                              |
| `id`                                              | *string*                                          | :heavy_minus_sign:                                | Unique identifier                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3              |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | The manager name                                  | John Doe                                          |
| `remoteId`                                        | *string*                                          | :heavy_minus_sign:                                | Provider's unique identifier                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3              |
| `role`                                            | [shared.Role](../../../sdk/models/shared/role.md) | :heavy_minus_sign:                                | The role of manager                               |                                                   |