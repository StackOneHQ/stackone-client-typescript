# HrisListTimeOffPoliciesResponse

## Example Usage

```typescript
import { HrisListTimeOffPoliciesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeOffPoliciesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 502,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeOffPoliciesPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        description: "Usable for regional and national holidays of employees.",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Holidays",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {},
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
| `timeOffPoliciesPaginated`                                                                | [shared.TimeOffPoliciesPaginated](../../../sdk/models/shared/timeoffpoliciespaginated.md) | :heavy_minus_sign:                                                                        | The list of time off policies was retrieved.                                              |