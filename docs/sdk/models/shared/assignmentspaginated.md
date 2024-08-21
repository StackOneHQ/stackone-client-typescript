# AssignmentsPaginated

## Example Usage

```typescript
import { AssignmentsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentsPaginated = {
    data: [
        {
            courseId: "16873-ENG-1",
            createdAt: "2021-07-21T14:00:00.000Z",
            dueDate: "2021-07-21T14:00:00.000Z",
            externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-ASSIGNMENT",
            id: "123456",
            passthrough: {
                other_known_names: "John Doe",
            },
            remoteCourseId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            updatedAt: "2021-07-21T14:00:00.000Z",
        },
    ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Assignment](../../../sdk/models/shared/assignment.md)[]   | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |