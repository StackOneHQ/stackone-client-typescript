# HRISDepartment

## Example Usage

```typescript
import { HRISDepartment, HRISDepartmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISDepartment = {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: {
        value: HRISDepartmentValue.Department,
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Unique identifier                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                          |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The name of the group                                                         |                                                                               |
| `ownerIds`                                                                    | *string*[]                                                                    | :heavy_minus_sign:                                                            | The list of group owner ids of the given group                                |                                                                               |
| `parentIds`                                                                   | *string*[]                                                                    | :heavy_minus_sign:                                                            | The list of parent group ids of the given group                               |                                                                               |
| `remoteId`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Provider's unique identifier                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                          |
| `remoteParentIds`                                                             | *string*[]                                                                    | :heavy_minus_sign:                                                            | Provider's list of parent group ids of the given group                        |                                                                               |
| `type`                                                                        | [shared.HRISDepartmentType](../../../sdk/models/shared/hrisdepartmenttype.md) | :heavy_minus_sign:                                                            | The type of the department group                                              | department                                                                    |