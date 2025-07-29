# StepLog

## Example Usage

```typescript
import { StepLog } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StepLog = {
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
  request: {
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer token",
    },
    id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    method: "get",
    url: {
      hostname: "example.com",
      path: "/api/v1/resource",
      queryParams: {
        "page": 1,
        "limit": 10,
      },
      url: "https://example.com/api/v1/resource",
    },
  },
  requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  resource: "employees",
  response: {
    customMappingErrors: [
      {
        id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        message: "Invalid value",
        targetField: "first_name",
      },
    ],
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer token",
    },
    providerErrors: [
      {
        headers: {},
        raw: {},
        status: 400,
        url: "https://api.provider.com/v1/resource",
      },
    ],
    statusCode: 200,
  },
  service: "hris",
  sourceIp: "192.168.1.1",
  startTime: new Date("2021-01-01T00:00:00Z"),
  status: 200,
  subResource: "documents",
  success: true,
  url: "https://api.stackone.com/unified/hris/employees?raw=false",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The account ID of the request                                                                 | 45355976281015164504                                                                          |
| `action`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested action                                                                          | download                                                                                      |
| `childResource`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested child resource                                                                  | time-off                                                                                      |
| `duration`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The request duration in milliseconds                                                          | 356                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The request end time ISO8601 date string                                                      | 2021-01-01T00:00:00Z                                                                          |
| `httpMethod`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested HTTP method                                                                     | get                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The provider request ID                                                                       | adbf752f-6457-4ddd-89b3-98ae2252b83b                                                          |
| `isWorker`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The asynchronous worker flag                                                                  | false                                                                                         |
| `path`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested path                                                                            | /unified/hris/employees                                                                       |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The project ID of the request                                                                 | dev-project-68574                                                                             |
| `provider`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested provider                                                                        | planday                                                                                       |
| `request`                                                                                     | [shared.RequestT](../../../sdk/models/shared/requestt.md)                                     | :heavy_minus_sign:                                                                            | The advanced log request data                                                                 |                                                                                               |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The request ID                                                                                | adbf752f-6457-4ddd-89b3-98ae2252b83b                                                          |
| `resource`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested resource                                                                        | employees                                                                                     |
| `response`                                                                                    | [shared.StepLogResponse](../../../sdk/models/shared/steplogresponse.md)                       | :heavy_minus_sign:                                                                            | The advanced log response data                                                                |                                                                                               |
| `service`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested service                                                                         | hris                                                                                          |
| `sourceIp`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requests source IPV4 ip address                                                           | 192.168.1.1                                                                                   |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The request start time ISO8601 date string                                                    | 2021-01-01T00:00:00Z                                                                          |
| `status`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | The requests response status code                                                             | 200                                                                                           |
| `subResource`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested sub resource                                                                    | documents                                                                                     |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The request success flag                                                                      | true                                                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The requested URL                                                                             | https://api.stackone.com/unified/hris/employees?raw=false                                     |