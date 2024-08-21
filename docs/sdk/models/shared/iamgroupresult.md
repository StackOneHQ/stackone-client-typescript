# IamGroupResult

## Example Usage

```typescript
import {
  IamGroupResult,
  IamGroupValue,
  IamPermissionValue,
  IamResourceValue,
  IamRoleValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamGroupResult = {
    data: {
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.IamGroup](../../../sdk/models/shared/iamgroup.md)         | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |