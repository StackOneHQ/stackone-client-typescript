# TaskResult

## Example Usage

```typescript
import { FileValue, TaskResult, TaskResultSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskResult = {
  data: {
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
    status: null,
    type: {
      value: TaskResultSchemasValue.Action,
    },
    updatedAt: new Date("2024-03-19T15:30:00.000Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.TaskResultData](../../../sdk/models/shared/taskresultdata.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `raw`                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]     | :heavy_minus_sign:                                                    | N/A                                                                   |