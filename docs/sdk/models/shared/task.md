# Task

## Example Usage

```typescript
import { FileValue, Task, TaskSchemasValue, TaskValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Task = {
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
  comments: null,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `assignedByEmployeeId`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the employee who assigned this task                                                 | cx280928938                                                                                   |
| `assignedByEmployeeName`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the employee who assigned this task                                               | John Smith                                                                                    |
| `attachments`                                                                                 | [shared.FileT](../../../sdk/models/shared/filet.md)[]                                         | :heavy_minus_sign:                                                                            | The documents attached to this task                                                           |                                                                                               |
| `comments`                                                                                    | [shared.TaskCommentApiModel](../../../sdk/models/shared/taskcommentapimodel.md)[]             | :heavy_minus_sign:                                                                            | The comments associated with this task                                                        |                                                                                               |
| `completionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The completion date of the task                                                               | 2024-03-19T15:30:00.000Z                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The creation date of this task                                                                | 2024-03-15T10:00:00.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the task                                                                   | Please complete all required onboarding documents in the employee portal                      |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The due date of the task                                                                      | 2024-03-20T23:59:59.000Z                                                                      |
| `employeeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The employee ID associated with this task                                                     | cx280928937                                                                                   |
| `extractedLinks`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of extracted links from the task                                                         | [<br/>"https://provider.com/docs/1",<br/>"https://provider.com/forms/2"<br/>]                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `linkToTask`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Link to the task in the provider system                                                       | https://provider.com/tasks/123                                                                |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the task                                                                          | Complete onboarding documents                                                                 |
| `nextTaskId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the next task in sequence                                                               | cx280928939                                                                                   |
| `parentProcessName`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the parent process of this task                                                       | Onboarding Tasks                                                                              |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `status`                                                                                      | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                 | :heavy_minus_sign:                                                                            | The status of the task                                                                        |                                                                                               |
| `type`                                                                                        | [shared.TaskType](../../../sdk/models/shared/tasktype.md)                                     | :heavy_minus_sign:                                                                            | The type of the task                                                                          |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last updated date of this task                                                            | 2024-03-19T15:30:00.000Z                                                                      |