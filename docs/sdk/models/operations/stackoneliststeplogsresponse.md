# StackoneListStepLogsResponse

## Example Usage

```typescript
import { StackoneListStepLogsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListStepLogsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 501,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  stepLogsPaginated: {
    data: [
      {
        accountId: "45355976281015164504",
        action: "download",
        childResource: "time-off",
        duration: 356,
        endTime: new Date("2021-01-01T00:00:00Z"),
        httpMethod: "get",
        id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        isWorker: false,
        path: "/unified/hris/employees",
        projectId: "dev-project-68574",
        provider: "planday",
        requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        resource: "employees",
        service: "hris",
        startTime: new Date("2021-01-01T00:00:00Z"),
        status: 200,
        subResource: "documents",
        success: true,
        url: "https://api.stackone.com/unified/hris/employees?raw=false",
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `stepLogsPaginated`                                                         | [shared.StepLogsPaginated](../../../sdk/models/shared/steplogspaginated.md) | :heavy_minus_sign:                                                          | The list of step logs was retrieved.                                        |