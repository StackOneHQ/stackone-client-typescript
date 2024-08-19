# IamRolesPaginated

## Example Usage

```typescript
import { IamPermissionValue, IamResourceValue, IamRolesPaginated, IamRoleValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamRolesPaginated = {
    data: [
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.IamRole](../../../sdk/models/shared/iamrole.md)[]                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |