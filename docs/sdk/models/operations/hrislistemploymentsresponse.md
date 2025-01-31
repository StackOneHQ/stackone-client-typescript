# HrisListEmploymentsResponse

## Example Usage

```typescript
import { HrisListEmploymentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmploymentsResponse = {
  contentType: "<value>",
  employmentsPaginated: {
    data: [
      {
        active: true,
        contractType: {
          contractType: {},
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          label: "Full-Time",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        costCenter: {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Engineering",
          ownerIds: [
            "cxIQNjUyEDM0",
            "cxIQNjQzNzA0MQ",
          ],
          parentIds: [
            "cxIQNjUyNDM0",
            "cxIQNjQzNzI0MQ",
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteOwnerIds: [
            "475364",
            "4327652",
          ],
          remoteParentIds: [
            "652434",
            "6437241",
          ],
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        department: {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Engineering",
          ownerIds: [
            "cxIQNjUyEDM0",
            "cxIQNjQzNzA0MQ",
          ],
          parentIds: [
            "cxIQNjUyNDM0",
            "cxIQNjQzNzI0MQ",
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteOwnerIds: [
            "475364",
            "4327652",
          ],
          remoteParentIds: [
            "652434",
            "6437241",
          ],
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        division: {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Engineering",
          ownerIds: [
            "cxIQNjUyEDM0",
            "cxIQNjQzNzA0MQ",
          ],
          parentIds: [
            "cxIQNjUyNDM0",
            "cxIQNjQzNzI0MQ",
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteOwnerIds: [
            "475364",
            "4327652",
          ],
          remoteParentIds: [
            "652434",
            "6437241",
          ],
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
        employeeId: "1687-3",
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        job: {
          description: {
            text: "Testing the laws of motion",
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          ownerId: "5356",
          parentId: "7577",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          title: "Software Engineer",
        },
        manager: [
          {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            role: {
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              label: "Admin",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              roleType: {},
            },
          },
        ],
        payCurrency: "USD",
        payFrequency: {},
        payPeriod: {},
        payRate: "40.00",
        remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        startDate: new Date("2021-01-01T01:01:01.000Z"),
        timeWorked: "P0Y0M0DT8H0M0S",
        type: {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          label: "Permanent",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {},
        },
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 424,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `employmentsPaginated`                                                            | [shared.EmploymentsPaginated](../../../sdk/models/shared/employmentspaginated.md) | :heavy_minus_sign:                                                                | The list of Employments was retrieved.                                            |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |