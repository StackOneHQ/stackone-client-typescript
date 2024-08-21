# IamPolicyResult

## Example Usage

```typescript
import { IamPermissionValue, IamPolicyResult, IamResourceValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPolicyResult = {
    data: {
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.IamPolicy](../../../sdk/models/shared/iampolicy.md)       | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |