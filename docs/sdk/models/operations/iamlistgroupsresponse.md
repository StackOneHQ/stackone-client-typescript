# IamListGroupsResponse

## Example Usage

```typescript
import { IamListGroupsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { IamGroupValue, IamPermissionValue, IamResourceValue, IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamListGroupsResponse = {
  contentType: "<value>",
  iamGroupsPaginated: {
    data: [
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
  },
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `iamGroupsPaginated`                                                          | [shared.IamGroupsPaginated](../../../sdk/models/shared/iamgroupspaginated.md) | :heavy_minus_sign:                                                            | The list of groups was retrieved.                                             |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |