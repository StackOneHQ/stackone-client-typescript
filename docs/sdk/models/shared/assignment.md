# Assignment

## Example Usage

```typescript
import { Assignment } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Assignment = {
    courseId: "16873-ENG-1",
    createdAt: "2021-07-21T14:00:00.000Z",
    dueDate: "2021-07-21T14:00:00.000Z",
    externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-ASSIGNMENT",
    id: "123456",
    remoteCourseId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
        my_project_custom_field_1: "REF-1236",
        my_project_custom_field_2: "some other value",
    },
    updatedAt: "2021-07-21T14:00:00.000Z",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `courseId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The course ID associated with this assignment                                                | 16873-ENG-1                                                                                  |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The date the assignment was created                                                          | 2021-07-21T14:00:00.000Z                                                                     |
| `dueDate`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | The date the assignment is due to be completed                                               | 2021-07-21T14:00:00.000Z                                                                     |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | The external ID associated with this assignment                                              | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-ASSIGNMENT                                                 |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The ID associated with this assignment                                                       | 123456                                                                                       |
| `remoteCourseId`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier of the course related to the assignment                         | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                         |
| `remoteExternalId`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier of the assignment                                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                         |
| `remoteId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `status`                                                                                     | [shared.AssignmentStatusEnum](../../../sdk/models/shared/assignmentstatusenum.md)[]          | :heavy_minus_sign:                                                                           | The status of the assignment                                                                 |                                                                                              |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The date the assignment was last updated                                                     | 2021-07-21T14:00:00.000Z                                                                     |