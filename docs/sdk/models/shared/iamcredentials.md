# IamCredentials

## Example Usage

```typescript
import {
  FileValue,
  IamCredentials,
  IamCredentialsSchemasValue,
  IamCredentialsValue,
  IamGroupValue,
  IamMfaTypeEnumValue,
  IamPermissionValue,
  IamRoleValue,
  IamUserValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamCredentials = {
  authType: {
    value: IamCredentialsValue.Oauth,
  },
  lastAccessedAt: new Date("2021-01-01T01:01:01.000Z"),
  name: "admin@example.com",
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
  user: {
    avatar: [],
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
        type: null,
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
    roles: null,
    status: {
      value: IamCredentialsSchemasValue.Enabled,
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    username: "hansolo1977",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                      | [shared.AuthType](../../../sdk/models/shared/authtype.md)                                                                       | :heavy_minus_sign:                                                                                                              | How the connection authenticates: oauth, api_key, or service_user.                                                              |                                                                                                                                 |
| `lastAccessedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | When this credential was last used to call the API.                                                                             | 2021-01-01T01:01:01.000Z                                                                                                        |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Human-readable name of the credential set.                                                                                      | admin@example.com                                                                                                               |
| `permissions`                                                                                                                   | [shared.IamPermission](../../../sdk/models/shared/iampermission.md)[]                                                           | :heavy_minus_sign:                                                                                                              | Effective permissions for this connection (what it can do).                                                                     |                                                                                                                                 |
| `scopes`                                                                                                                        | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | OAuth scopes granted (when auth_type is oauth); empty otherwise.                                                                |                                                                                                                                 |
| `user`                                                                                                                          | [shared.IamCredentialsUser](../../../sdk/models/shared/iamcredentialsuser.md)                                                   | :heavy_minus_sign:                                                                                                              | The IamUser associated with this credential, if applicable (e.g. OAuth or named service account). Null for impersonal API keys. |                                                                                                                                 |