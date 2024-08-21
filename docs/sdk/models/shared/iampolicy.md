# IamPolicy

## Example Usage

```typescript
import { IamPermissionValue, IamPolicy, IamResourceValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPolicy = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the policy.                                                                       | Remote Contractor Policy                                                                      |
| `permissions`                                                                                 | [shared.IamPermission](../../../sdk/models/shared/iampermission.md)[]                         | :heavy_minus_sign:                                                                            | The set of permissions associated with the policy.                                            |                                                                                               |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01T01:01:01.000Z                                                                      |