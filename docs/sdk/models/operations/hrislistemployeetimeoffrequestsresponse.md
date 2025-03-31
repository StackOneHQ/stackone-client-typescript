# HrisListEmployeeTimeOffRequestsResponse

## Example Usage

```typescript
import { HrisListEmployeeTimeOffRequestsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TimeOffSchemasPolicyTypeValue, TimeOffSchemasPolicyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListEmployeeTimeOffRequestsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 409,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeOffPaginated: {
    data: [
      {
        approverId: "1687-4",
        createdDate: new Date("2021-01-01T01:01:01.000Z"),
        duration: "P3Y6M4DT12H30M5S",
        employeeId: "1687-3",
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        endHalfDay: true,
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        policy: {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          description:
            "Usable for regional and national holidays of employees.",
          durationUnit: {
            value: TimeOffSchemasPolicyValue.Hours,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Holidays",
          reasons: [
            {
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            },
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {
            value: TimeOffSchemasPolicyTypeValue.Holiday,
          },
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
        reason: {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        remoteApproverId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteTimeOffPolicyId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        startDate: new Date("2021-01-01T01:01:01.000Z"),
        startHalfDay: true,
        timeOffPolicyId: "cx280928933",
        updatedDate: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `timeOffPaginated`                                                                      | [shared.TimeOffPaginated](../../../sdk/models/shared/timeoffpaginated.md)               | :heavy_minus_sign:                                                                      | The time off requests related to the employee with the given identifier were retrieved. |