# HrisListTimeEntriesResponse

## Example Usage

```typescript
import { HrisListTimeEntriesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeEntriesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 400,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeEntriesPaginated: {
    data: [
      {
        breakDuration: 0.5,
        createdAt: new Date("2023-02-23T00:00:00.000Z"),
        employeeId: "1687-3",
        endTime: new Date("2021-01-01T01:01:01.000Z"),
        hoursWorked: 8,
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        laborType: {
          code: "ABC123",
        },
        location: {
          active: true,
          id: "1687-3",
          name: "1687-4",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        startTime: new Date("2021-01-01T01:01:01.000Z"),
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2024-02-23T00:00:00.000Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `timeEntriesPaginated`                                                            | [shared.TimeEntriesPaginated](../../../sdk/models/shared/timeentriespaginated.md) | :heavy_minus_sign:                                                                | The list of time entries was retrieved.                                           |