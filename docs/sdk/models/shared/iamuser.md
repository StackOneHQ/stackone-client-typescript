# IamUser

## Example Usage

```typescript
import {
  IamGroupValue,
  IamMfaTypeEnumValue,
  IamPermissionValue,
  IamResourceValue,
  IamRoleValue,
  IamUser,
  IamUserSchemasValue,
  IamUserValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamUser = {
  avatar: {
    category: {},
    categoryId: "6530",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "abc",
      value: IamUserSchemasValue.Pdf,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "My Document",
    path: "/path/to/file",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUrl: "https://example.com/file.pdf",
    updatedAt: new Date("2021-01-02T01:01:01.000Z"),
  },
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
          policies: [
            {
              createdAt: new Date("2021-01-01T01:01:01.000Z"),
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              name: "Remote Contractor Policy",
              permissions: [
                {
                  createdAt: new Date("2021-01-01T01:01:01.000Z"),
                  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                  name: "read:users",
                  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                  resources: [
                    {
                      createdAt: new Date("2021-01-01T01:01:01.000Z"),
                      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                      location: "s3://bucket-name/folder-name",
                      name: "Company History Records",
                      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                      type: {
                        value: IamResourceValue.File,
                      },
                      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
                    },
                  ],
                  type: {
                    value: IamPermissionValue.ReadWrite,
                  },
                  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
                },
              ],
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              updatedAt: new Date("2021-01-01T01:01:01.000Z"),
            },
          ],
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
  primaryEmailAddress: "han@stackone.com",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  roles: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      policies: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Remote Contractor Policy",
          permissions: [
            {
              createdAt: new Date("2021-01-01T01:01:01.000Z"),
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              name: "read:users",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              resources: [
                {
                  createdAt: new Date("2021-01-01T01:01:01.000Z"),
                  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                  location: "s3://bucket-name/folder-name",
                  name: "Company History Records",
                  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                  type: {
                    value: IamResourceValue.File,
                  },
                  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
                },
              ],
              type: {
                value: IamPermissionValue.ReadWrite,
              },
              updatedAt: new Date("2021-01-01T01:01:01.000Z"),
            },
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `avatar`                                                                                       | [shared.IamUserAvatar](../../../sdk/models/shared/iamuseravatar.md)                            | :heavy_minus_sign:                                                                             | The user's avatar data. This generally contains a URL within this property's 'contents' array. |                                                                                                |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The date the user was created                                                                  | 2021-01-01T01:01:01.000Z                                                                       |
| `firstName`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Han                                                                                            |
| `groups`                                                                                       | [shared.IamGroup](../../../sdk/models/shared/iamgroup.md)[]                                    | :heavy_minus_sign:                                                                             | List of groups the user is assigned to                                                         |                                                                                                |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Unique identifier                                                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `isBotUser`                                                                                    | *shared.IsBotUser*                                                                             | :heavy_minus_sign:                                                                             | Indicates if the user is a bot or service user                                                 | true                                                                                           |
| `lastActiveAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The date this user was last active                                                             | 2021-01-01T01:01:01.000Z                                                                       |
| `lastLoginAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The date this user last logged in                                                              | 2021-01-01T01:01:01.000Z                                                                       |
| `lastName`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Solo                                                                                           |
| `multiFactorEnabled`                                                                           | [shared.IamMfaTypeEnum](../../../sdk/models/shared/iammfatypeenum.md)[]                        | :heavy_minus_sign:                                                                             | The list of Multi-Factor Authentication (MFA) types enabled for the user.                      |                                                                                                |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | User's name which (can be a full name or display name)                                         | Han Solo                                                                                       |
| `primaryEmailAddress`                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | Primary email address of the user. This is generally a work email address.                     | han@stackone.com                                                                               |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider's unique identifier                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                           |
| `roles`                                                                                        | [shared.IamRole](../../../sdk/models/shared/iamrole.md)[]                                      | :heavy_minus_sign:                                                                             | List of roles the user is assigned to                                                          |                                                                                                |
| `status`                                                                                       | [shared.IamUserStatus](../../../sdk/models/shared/iamuserstatus.md)                            | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `unifiedCustomFields`                                                                          | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | Custom Unified Fields configured in your StackOne project                                      | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The date the user was created                                                                  | 2021-01-01T01:01:01.000Z                                                                       |
| `username`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | hansolo1977                                                                                    |