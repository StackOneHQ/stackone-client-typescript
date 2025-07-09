# HrisListEmployeeTimeOffRequestsResponse

## Example Usage

```typescript
import { HrisListEmployeeTimeOffRequestsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeTimeOffRequestsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 248870,
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