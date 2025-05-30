# LmsListUserCompletionsResponse

## Example Usage

```typescript
import { LmsListUserCompletionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListUserCompletionsResponse = {
  completionsPaginated: {
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
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: "2021-07-21T14:00:00.000Z",
        userId: "c28xyrc55866bvuv",
      },
    ],
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 307,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `completionsPaginated`                                                            | [shared.CompletionsPaginated](../../../sdk/models/shared/completionspaginated.md) | :heavy_minus_sign:                                                                | The completions with for the users with the given identifier were retrieved.      |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |