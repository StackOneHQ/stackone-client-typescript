# AssignmentResult

## Example Usage

```typescript
import { AssignmentResult, AssignmentSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentResult = {
  data: {
    createdAt: "2021-07-21T14:00:00.000Z",
    dueDate: "2021-07-21T14:00:00.000Z",
    id: "123456",
    learningObjectExternalReference: "learning-content-123",
    learningObjectId: "e3gd34-23tr21-er234-345er56",
    progress: 40,
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteLearningObjectId: "e3cb55bf-aa84-466e-a6c1-b8302b257a49",
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    status: {
      value: AssignmentSchemasValue.InProgress,
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: "2021-07-21T14:00:00.000Z",
    userId: "c28xyrc55866bvuv",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Assignment](../../../sdk/models/shared/assignment.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |