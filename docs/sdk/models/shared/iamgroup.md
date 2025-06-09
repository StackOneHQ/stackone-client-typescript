# IamGroup

## Example Usage

```typescript
import { IamGroup, IamGroupValue, IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamGroup = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteParentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  roles: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      policies: null,
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        value: IamRoleValue.Admin,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
  type: {
    value: IamGroupValue.Team,
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2021-01-01T01:01:01.000Z                                                                       |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Unique identifier                                                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `parentId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The parent group id for when a group belongs to another group.                                 |                                                                                                |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider's unique identifier                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `remoteParentId`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider's unique identifier of the parent group id for when a group belongs to another group. | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                           |
| `roles`                                                                                        | [shared.IamRole](../../../sdk/models/shared/iamrole.md)[]                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `type`                                                                                         | [shared.IamGroupType](../../../sdk/models/shared/iamgrouptype.md)                              | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2021-01-01T01:01:01.000Z                                                                       |