# AssignmentResult

## Example Usage

```typescript
import { AssignmentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentResult = {
  data: {
    courseId: "16873-ENG-1",
    createdAt: "2021-07-21T14:00:00.000Z",
    dueDate: "2021-07-21T14:00:00.000Z",
    id: "123456",
    remoteCourseId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: "2021-07-21T14:00:00.000Z",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Assignment](../../../sdk/models/shared/assignment.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |