# IamGetRoleResponse

## Example Usage

```typescript
import { IamGetRoleResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { IamPermissionValue, IamResourceValue, IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamGetRoleResponse = {
    contentType: "<value>",
    iamRoleResult: {
        data: {
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
    },
    statusCode: 367562,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `iamRoleResult`                                                       | [shared.IamRoleResult](../../../sdk/models/shared/iamroleresult.md)   | :heavy_minus_sign:                                                    | The role with the given identifier was retrieved.                     |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |