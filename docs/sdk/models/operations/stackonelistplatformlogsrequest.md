# StackoneListPlatformLogsRequest

## Example Usage

```typescript
import {
  StackoneListPlatformLogsQueryParamOrderBy,
  StackoneListPlatformLogsQueryParamOrderDirection,
  StackoneListPlatformLogsQueryParamRequestLogsOrderBy,
  StackoneListPlatformLogsQueryParamRequestLogsOrderDirection,
  StackoneListPlatformLogsRequest,
} from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListPlatformLogsRequest = {
  filter: {
    accountIds: "45355976281015164504,45355976281015164505",
    actions: "download,upload",
    categories: "hris,ats",
    endDate: "2020-01-01T00:00:00.000Z",
    httpMethods: "GET,POST",
    orderBy: StackoneListPlatformLogsQueryParamRequestLogsOrderBy.Duration,
    orderDirection:
      StackoneListPlatformLogsQueryParamRequestLogsOrderDirection.Asc,
    requestIds:
      "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
    resources: "employees,users",
    sourceTypes: "DASHBOARD,SYNTHETIC_WEBHOOK",
    startDate: "2020-01-01T00:00:00.000Z",
    statusCodes: "200,400",
    success: true,
  },
  orderBy: StackoneListPlatformLogsQueryParamOrderBy.Duration,
  orderDirection: StackoneListPlatformLogsQueryParamOrderDirection.Asc,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                                          | [operations.QueryParamFilter](../../../sdk/models/operations/queryparamfilter.md)                                                                 | :heavy_minus_sign:                                                                                                                                | Filter parameters that allow greater customisation of the list response                                                                           |                                                                                                                                                   |
| `next`                                                                                                                                            | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The unified cursor                                                                                                                                |                                                                                                                                                   |
| `orderBy`                                                                                                                                         | [operations.StackoneListPlatformLogsQueryParamOrderBy](../../../sdk/models/operations/stackonelistplatformlogsqueryparamorderby.md)               | :heavy_minus_sign:                                                                                                                                | The field to order the results by.                                                                                                                | created_at                                                                                                                                        |
| `orderDirection`                                                                                                                                  | [operations.StackoneListPlatformLogsQueryParamOrderDirection](../../../sdk/models/operations/stackonelistplatformlogsqueryparamorderdirection.md) | :heavy_minus_sign:                                                                                                                                | The direction to order the results by.                                                                                                            | asc                                                                                                                                               |
| `pageSize`                                                                                                                                        | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The number of results per page (default value is 25)                                                                                              |                                                                                                                                                   |