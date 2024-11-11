# LmsGetUserCompletionResponse

## Example Usage

```typescript
import { LmsGetUserCompletionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetUserCompletionResponse = {
  completionResult: {
    data: {
      completedAt: "2021-07-21T14:00:00.000Z",
      contentExternalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT",
      contentId: "16873-ENG-VIDEO-1",
      courseId: "16873-ENG-COURSE-1",
      createdAt: "2021-07-21T14:00:00.000Z",
      externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
      id: "123456",
      learningObjectExternalReference: "e3gd34-23tr21-er234-345er56",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      remoteContentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteCourseId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteLearningObjectId: "e3cb55bf-aa84-466e-a6c1-b8302b257a49",
      remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: "2021-07-21T14:00:00.000Z",
      userId: "c28xyrc55866bvuv",
    },
  },
  contentType: "<value>",
  statusCode: 502,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `completionResult`                                                        | [shared.CompletionResult](../../../sdk/models/shared/completionresult.md) | :heavy_minus_sign:                                                        | The completion with the given identifier was retrieved.                   |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |