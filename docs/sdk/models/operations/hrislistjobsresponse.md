# HrisListJobsResponse

## Example Usage

```typescript
import { HrisListJobsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { JobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListJobsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  jobsPaginated: {
    data: [
      {
        code: "184919",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        customFields: [
          {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Training Completion Status",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            value: "Completed",
            valueId: "value_456",
          },
        ],
        departmentIds: [
          "308570",
          "308571",
          "308572",
        ],
        hiringTeam: [
          {
            email: "john.doe@gmail.com",
            firstName: "John",
            lastName: "Doe",
            remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            role: "Software Engineer",
            userId: "123456",
          },
        ],
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        interviewStages: [
          {
            createdAt: new Date("2021-01-01T01:01:01.000Z"),
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            unifiedCustomFields: {
              "my_project_custom_field_1": "REF-1236",
              "my_project_custom_field_2": "some other value",
            },
            updatedAt: new Date("2021-01-01T01:01:01.000Z"),
          },
        ],
        jobStatus: {
          sourceValue: "Published",
          value: JobValue.Published,
        },
        locationIds: [
          "668570",
          "678571",
          "688572",
        ],
        remoteDepartmentIds: [
          "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteLocationIds: [
          "668570",
          "678571",
          "688572",
        ],
        title: "Software Engineer",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `jobsPaginated`                                                       | [shared.JobsPaginated](../../../sdk/models/shared/jobspaginated.md)   | :heavy_minus_sign:                                                    | The list of jobs was retrieved.                                       |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |