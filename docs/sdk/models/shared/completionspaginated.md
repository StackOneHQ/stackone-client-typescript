# CompletionsPaginated

## Example Usage

```typescript
import { CompletionsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionsPaginated = {
  data: [
    {
      completedAt: "2021-07-21T14:00:00.000Z",
      createdAt: "2021-07-21T14:00:00.000Z",
      id: "123456",
      learningObjectExternalReference: "learning-content-123",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteLearningObjectId: "e3cb55bf-aa84-466e-a6c1-b8302b257a49",
      remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      timeSpent: "PT1H30M45S",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: "2021-07-21T14:00:00.000Z",
      userId: "c28xyrc55866bvuv",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Completion](../../../sdk/models/shared/completion.md)[]   | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |