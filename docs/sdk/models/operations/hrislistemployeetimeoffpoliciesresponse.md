# HrisListEmployeeTimeOffPoliciesResponse

## Example Usage

```typescript
import { HrisListEmployeeTimeOffPoliciesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TimeOffPoliciesSchemasValue, TimeOffPoliciesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListEmployeeTimeOffPoliciesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 207,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeOffPoliciesPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        description: "Usable for regional and national holidays of employees.",
        durationUnit: {
          value: TimeOffPoliciesValue.Hours,
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
          value: TimeOffPoliciesSchemasValue.Holiday,
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `timeOffPoliciesPaginated`                                                                | [shared.TimeOffPoliciesPaginated](../../../sdk/models/shared/timeoffpoliciespaginated.md) | :heavy_minus_sign:                                                                        | The time off policies related to the employee with the given identifier were retrieved.   |