# Completion

## Example Usage

```typescript
import { Completion } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Completion = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The date the content was completed                                                           | 2021-07-21T14:00:00.000Z                                                                     |
| `contentExternalReference`                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The external ID associated with this content                                                 | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT                                                    |
| `contentId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The content ID associated with this completion                                               | 16873-ENG-VIDEO-1                                                                            |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The created date of the completion                                                           | 2021-07-21T14:00:00.000Z                                                                     |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | The external ID associated with this completion                                              | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION                                                 |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The ID associated with this completion                                                       | 123456                                                                                       |
| `remoteContentId`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier of the completion                                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                         |
| `remoteExternalId`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier of the content                                                  | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                         |
| `remoteId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `remoteUserId`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier of the user related to the completion                           | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                         |
| `result`                                                                                     | [shared.CompletionSchemasResult](../../../sdk/models/shared/completionschemasresult.md)      | :heavy_minus_sign:                                                                           | The result of the completion                                                                 |                                                                                              |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The updated date of the completion                                                           | 2021-07-21T14:00:00.000Z                                                                     |
| `userId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The user ID associated with this completion                                                  | c28xyrc55866bvuv                                                                             |