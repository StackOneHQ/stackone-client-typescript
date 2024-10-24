# LmsListAssignmentsResponse

## Example Usage

```typescript
import { LmsListAssignmentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListAssignmentsResponse = {
  assignmentsPaginated: {
    data: [
      {
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
    ],
  },
  contentType: "<value>",
  statusCode: 505,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `assignmentsPaginated`                                                            | [shared.AssignmentsPaginated](../../../sdk/models/shared/assignmentspaginated.md) | :heavy_minus_sign:                                                                | The list of assignments was retrieved.                                            |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |