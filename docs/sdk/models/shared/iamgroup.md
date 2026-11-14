# IamGroup

## Example Usage

```typescript
import {
  FileValue,
  IamGroup,
  IamGroupValue,
  IamMfaTypeEnumValue,
  IamPermissionValue,
  IamRoleValue,
  IamUserValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamGroup = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteParentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  roles: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      permissions: null,
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      scope: {
        resourceId: "group_abc123",
        resourceType: "group",
      },
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
  users: [
    {
      avatar: [
        {
          category: {},
          categoryId: "6530",
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          fileFormat: {
            sourceValue: "application/pdf",
            value: FileValue.Pdf,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "My Document",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteUrl: "https://example.com/file.pdf",
          updatedAt: new Date("2021-01-02T01:01:01.000Z"),
        },
      ],
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      firstName: "Han",
      groups: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteParentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          roles: [
            {
              createdAt: new Date("2021-01-01T01:01:01.000Z"),
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              permissions: null,
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              scope: {
                resourceId: "group_abc123",
                resourceType: "group",
              },
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
        },
      ],
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      isBotUser: true,
      lastActiveAt: new Date("2021-01-01T01:01:01.000Z"),
      lastLoginAt: new Date("2021-01-01T01:01:01.000Z"),
      lastName: "Solo",
      multiFactorEnabled: [
        {
          value: IamMfaTypeEnumValue.Totp,
        },
      ],
      name: "Han Solo",
      permissions: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "read:users",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          scopes: [
            {
              resourceId: "C0123456789",
              resourceType: "channel",
            },
          ],
          type: {
            value: IamPermissionValue.ReadWrite,
          },
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      primaryEmailAddress: "han@stackone.com",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      roles: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          permissions: null,
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          scope: {
            resourceId: "group_abc123",
            resourceType: "group",
          },
          type: {
            value: IamRoleValue.Admin,
          },
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      status: {
        value: IamUserValue.Enabled,
      },
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      username: "hansolo1977",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `childGroupIds`                                                                                | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Ids of groups whose parent_id is this group.                                                   |                                                                                                |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2021-01-01T01:01:01.000Z                                                                       |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Unique identifier                                                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | Id of the organization this group belongs to.                                                  |                                                                                                |
| `parentId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The parent group id for when a group belongs to another group.                                 |                                                                                                |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider's unique identifier                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `remoteParentId`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider's unique identifier of the parent group id for when a group belongs to another group. | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                           |
| `roles`                                                                                        | [shared.IamRole](../../../sdk/models/shared/iamrole.md)[]                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `type`                                                                                         | [shared.IamGroupType](../../../sdk/models/shared/iamgrouptype.md)                              | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2021-01-01T01:01:01.000Z                                                                       |
| `users`                                                                                        | [shared.IamUser](../../../sdk/models/shared/iamuser.md)[]                                      | :heavy_minus_sign:                                                                             | Members of the group. Populated when expand=users is requested.                                |                                                                                                |