# HrisGetTimeOffRequestResponse

## Example Usage

```typescript
import { HrisGetTimeOffRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetTimeOffRequestResponse = {
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  timeOffResult: {
    data: {
      approverId: "1687-4",
      createdDate: new Date("2021-01-01T01:01:01.000Z"),
      duration: "P3Y6M4DT12H30M5S",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteApproverId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
      updatedDate: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `timeOffResult`                                                       | [shared.TimeOffResult](../../../sdk/models/shared/timeoffresult.md)   | :heavy_minus_sign:                                                    | The time off request with the given identifier was retrieved.         |