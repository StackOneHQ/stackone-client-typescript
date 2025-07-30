# StackoneListStepLogsQueryParamFilter

Filter parameters that allow greater customisation of the list response

## Example Usage

```typescript
import { StackoneListStepLogsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListStepLogsQueryParamFilter = {
  accountIds: "45355976281015164504,45355976281015164505",
  actions: "download,upload",
  childResources: "documents,time-off",
  endDate: new Date("2020-01-01T00:00:00.000Z"),
  httpMethods: "GET,POST",
  providers: "ashby,greenhouse",
  requestIds:
    "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
  resources: "employees,users",
  services: "hris,ats",
  startDate: new Date("2020-01-01T00:00:00.000Z"),
  statusCodes: "200,400",
  subResources: "documents,employees",
  success: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountIds`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of account IDs to filter the results by.                               | 45355976281015164504,45355976281015164505                                                     |
| `actions`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of actions to filter the results by.                                   | download,upload                                                                               |
| `childResources`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of child resources to filter the results by.                           | documents,time-off                                                                            |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | A ISO8601 date string to filter the results by end_date.                                      | 2020-01-01T00:00:00.000Z                                                                      |
| `httpMethods`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of HTTP methods to filter the results by.                              | GET,POST                                                                                      |
| `providers`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of provider keys to filter the results by.                             | ashby,greenhouse                                                                              |
| `requestIds`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of request IDs to filter the results by.                               | adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c                     |
| `resources`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of resources to filter the results by.                                 | employees,users                                                                               |
| `services`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of services to filter the results by.                                  | hris,ats                                                                                      |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | A ISO8601 date string to filter the results by start_date.                                    | 2020-01-01T00:00:00.000Z                                                                      |
| `statusCodes`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of status codes to filter the results by.                              | 200,400                                                                                       |
| `subResources`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A comma-separated list of sub resources to filter the results by.                             | documents,employees                                                                           |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | A boolean value to filter the results by success or failure.                                  | true                                                                                          |