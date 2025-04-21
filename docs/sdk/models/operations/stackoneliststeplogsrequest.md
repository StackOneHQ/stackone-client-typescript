# StackoneListStepLogsRequest

## Example Usage

```typescript
import {
  StackoneListStepLogsQueryParamInclude,
  StackoneListStepLogsQueryParamOrderBy,
  StackoneListStepLogsQueryParamOrderDirection,
  StackoneListStepLogsQueryParamRequestLogsOrderBy,
  StackoneListStepLogsQueryParamRequestLogsOrderDirection,
  StackoneListStepLogsRequest,
} from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListStepLogsRequest = {
  filter: {
    accountIds: "45355976281015164504,45355976281015164505",
    actions: "download,upload",
    childResources: "documents,time-off",
    endDate: "2020-01-01T00:00:00.000Z",
    httpMethods: "GET,POST",
    orderBy: StackoneListStepLogsQueryParamRequestLogsOrderBy.Status,
    orderDirection: StackoneListStepLogsQueryParamRequestLogsOrderDirection.Asc,
    providers: "ashby,greenhouse",
    requestIds:
      "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
    resources: "employees,users",
    services: "hris,ats",
    startDate: "2020-01-01T00:00:00.000Z",
    statusCodes: "200,400",
    subResources: "documents,employees",
    success: true,
  },
  include: StackoneListStepLogsQueryParamInclude.StepLogs,
  orderBy: StackoneListStepLogsQueryParamOrderBy.Status,
  orderDirection: StackoneListStepLogsQueryParamOrderDirection.Asc,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                                  | [operations.QueryParamFilter](../../../sdk/models/operations/queryparamfilter.md)                                                         | :heavy_minus_sign:                                                                                                                        | Filter parameters that allow greater customisation of the list response                                                                   |                                                                                                                                           |
| `include`                                                                                                                                 | [operations.StackoneListStepLogsQueryParamInclude](../../../sdk/models/operations/stackoneliststeplogsqueryparaminclude.md)               | :heavy_minus_sign:                                                                                                                        | The include parameter allows you to include additional data in the response.                                                              | step_logs                                                                                                                                 |
| `next`                                                                                                                                    | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The unified cursor                                                                                                                        |                                                                                                                                           |
| `orderBy`                                                                                                                                 | [operations.StackoneListStepLogsQueryParamOrderBy](../../../sdk/models/operations/stackoneliststeplogsqueryparamorderby.md)               | :heavy_minus_sign:                                                                                                                        | The field to order the results by.                                                                                                        | created_at                                                                                                                                |
| `orderDirection`                                                                                                                          | [operations.StackoneListStepLogsQueryParamOrderDirection](../../../sdk/models/operations/stackoneliststeplogsqueryparamorderdirection.md) | :heavy_minus_sign:                                                                                                                        | The direction to order the results by.                                                                                                    | asc                                                                                                                                       |
| `pageSize`                                                                                                                                | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The number of results per page (default value is 25)                                                                                      |                                                                                                                                           |