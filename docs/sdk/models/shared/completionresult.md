# CompletionResult

## Example Usage

```typescript
import { CompletionResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionResult = {
  data: {
    completedAt: "2021-07-21T14:00:00.000Z",
    contentExternalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT",
    contentId: "16873-ENG-VIDEO-1",
    createdAt: "2021-07-21T14:00:00.000Z",
    externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
    id: "123456",
    remoteContentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
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
| `data`                                                            | [shared.Completion](../../../sdk/models/shared/completion.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |