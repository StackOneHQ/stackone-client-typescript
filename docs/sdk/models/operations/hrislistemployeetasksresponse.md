# HrisListEmployeeTasksResponse

## Example Usage

```typescript
import { HrisListEmployeeTasksResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { FileValue, TaskSchemasValue, TaskValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListEmployeeTasksResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksPaginated: {
    data: [
      {
        assignedByEmployeeId: "cx280928938",
        assignedByEmployeeName: "John Smith",
        attachments: [
          {
            category: {},
            categoryId: "6530",
            createdAt: new Date("2021-01-01T01:01:01.000Z"),
            fileFormat: {
              sourceValue: "application/pdf",
              value: FileValue.Pdf,
            },
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "My Document",
            path: "/path/to/file",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteUrl: "https://example.com/file.pdf",
            updatedAt: new Date("2021-01-02T01:01:01.000Z"),
          },
        ],
        comments: [
          {
            comment: "Approved based on in-person assessment",
            createdAt: new Date("2024-03-15T10:00:00.000Z"),
          },
        ],
        completionDate: new Date("2024-03-19T15:30:00.000Z"),
        createdAt: new Date("2024-03-15T10:00:00.000Z"),
        description:
          "Please complete all required onboarding documents in the employee portal",
        dueDate: new Date("2024-03-20T23:59:59.000Z"),
        employeeId: "cx280928937",
        extractedLinks: [
          "https://provider.com/docs/1",
          "https://provider.com/forms/2",
        ],
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        linkToTask: "https://provider.com/tasks/123",
        name: "Complete onboarding documents",
        nextTaskId: "cx280928939",
        parentProcessName: "Onboarding Tasks",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        status: {
          value: TaskValue.Open,
        },
        type: {
          value: TaskSchemasValue.Action,
        },
        updatedAt: new Date("2024-03-19T15:30:00.000Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `tasksPaginated`                                                            | [shared.TasksPaginated](../../../sdk/models/shared/taskspaginated.md)       | :heavy_minus_sign:                                                          | The list of tasks for the employee with the given identifier was retrieved. |