# IamGetUserResponse

## Example Usage

```typescript
import { IamGetUserResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  IamGroupValue,
  IamMfaTypeEnumValue,
  IamPermissionValue,
  IamResourceValue,
  IamRoleValue,
  IamUserSchemasValue,
  IamUserValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamGetUserResponse = {
  contentType: "<value>",
  iamUserResult: {
    data: {
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
    },
  },
  statusCode: 305,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `iamUserResult`                                                       | [shared.IamUserResult](../../../sdk/models/shared/iamuserresult.md)   | :heavy_minus_sign:                                                    | The user with the given identifier was retrieved.                     |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |