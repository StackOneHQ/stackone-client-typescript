# HrisListEmployeeTimeOffBalancesResponse

## Example Usage

```typescript
import { HrisListEmployeeTimeOffBalancesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeTimeOffBalancesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeOffBalancesPaginated: {
    data: [
      {
        balanceExpiryDate: new Date("2021-01-01T01:01:01.000Z"),
        balanceStartDate: new Date("2021-01-01T01:01:01.000Z"),
        balanceUnit: {},
        currentBalance: 8,
        employeeId: "cx280928937",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        initialBalance: 8,
        policy: {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          description:
            "Usable for regional and national holidays of employees.",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Holidays",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {},
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
        policyId: "cx280928937",
        remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remotePolicyId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
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
| `timeOffBalancesPaginated`                                                                | [shared.TimeOffBalancesPaginated](../../../sdk/models/shared/timeoffbalancespaginated.md) | :heavy_minus_sign:                                                                        | The list of time off balances of the employee with the given identifier was retrieved.    |