# RequestLogs
(*requestLogs*)

## Overview

### Available Operations

* [getLog](#getlog) - Get a Log
* [listLogs](#listlogs) - List Logs
* [listStepLogs](#liststeplogs) - List Step Logs

## getLog

Get a Log

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { Include } from "@stackone/stackone-client-ts/sdk/models/operations";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.requestLogs.getLog({
    id: "<id>",
    include: Include.StepLogs,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { requestLogsGetLog } from "@stackone/stackone-client-ts/funcs/requestLogsGetLog.js";
import { Include } from "@stackone/stackone-client-ts/sdk/models/operations";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await requestLogsGetLog(stackOne, {
    id: "<id>",
    include: Include.StepLogs,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestLogsGetLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetLogRequest](../../sdk/models/operations/stackonegetlogrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetLogResponse](../../sdk/models/operations/stackonegetlogresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listLogs

List Logs

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  OrderBy,
  OrderDirection,
  QueryParamInclude,
  QueryParamOrderBy,
  QueryParamOrderDirection,
} from "@stackone/stackone-client-ts/sdk/models/operations";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.requestLogs.listLogs({
    filter: {
      accountIds: "45355976281015164504,45355976281015164505",
      actions: "download,upload",
      childResources: "documents,time-off",
      endDate: "2020-01-01T00:00:00.000Z",
      httpMethods: "GET,POST",
      orderBy: QueryParamOrderBy.Service,
      orderDirection: QueryParamOrderDirection.Asc,
      providers: "ashby,greenhouse",
      requestIds: "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
      resources: "employees,users",
      services: "hris,ats",
      sourceTypes: "DASHBOARD,SYNTHETIC_WEBHOOK",
      startDate: "2020-01-01T00:00:00.000Z",
      statusCodes: "200,400",
      subResources: "documents,employees",
      success: true,
    },
    include: QueryParamInclude.StepLogs,
    orderBy: OrderBy.Duration,
    orderDirection: OrderDirection.Asc,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { requestLogsListLogs } from "@stackone/stackone-client-ts/funcs/requestLogsListLogs.js";
import {
  OrderBy,
  OrderDirection,
  QueryParamInclude,
  QueryParamOrderBy,
  QueryParamOrderDirection,
} from "@stackone/stackone-client-ts/sdk/models/operations";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await requestLogsListLogs(stackOne, {
    filter: {
      accountIds: "45355976281015164504,45355976281015164505",
      actions: "download,upload",
      childResources: "documents,time-off",
      endDate: "2020-01-01T00:00:00.000Z",
      httpMethods: "GET,POST",
      orderBy: QueryParamOrderBy.Service,
      orderDirection: QueryParamOrderDirection.Asc,
      providers: "ashby,greenhouse",
      requestIds: "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
      resources: "employees,users",
      services: "hris,ats",
      sourceTypes: "DASHBOARD,SYNTHETIC_WEBHOOK",
      startDate: "2020-01-01T00:00:00.000Z",
      statusCodes: "200,400",
      subResources: "documents,employees",
      success: true,
    },
    include: QueryParamInclude.StepLogs,
    orderBy: OrderBy.Duration,
    orderDirection: OrderDirection.Asc,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestLogsListLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneListLogsRequest](../../sdk/models/operations/stackonelistlogsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListLogsResponse](../../sdk/models/operations/stackonelistlogsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listStepLogs

List Step Logs

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  StackoneListStepLogsQueryParamOrderBy,
  StackoneListStepLogsQueryParamOrderDirection,
} from "@stackone/stackone-client-ts/sdk/models/operations";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.requestLogs.listStepLogs({
    filter: {
      accountIds: "45355976281015164504,45355976281015164505",
      actions: "download,upload",
      childResources: "documents,time-off",
      endDate: "2020-01-01T00:00:00.000Z",
      httpMethods: "GET,POST",
      providers: "ashby,greenhouse",
      requestIds: "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
      resources: "employees,users",
      services: "hris,ats",
      startDate: "2020-01-01T00:00:00.000Z",
      statusCodes: "200,400",
      subResources: "documents,employees",
      success: true,
    },
    orderBy: StackoneListStepLogsQueryParamOrderBy.EventDatetime,
    orderDirection: StackoneListStepLogsQueryParamOrderDirection.Asc,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { requestLogsListStepLogs } from "@stackone/stackone-client-ts/funcs/requestLogsListStepLogs.js";
import {
  StackoneListStepLogsQueryParamOrderBy,
  StackoneListStepLogsQueryParamOrderDirection,
} from "@stackone/stackone-client-ts/sdk/models/operations";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await requestLogsListStepLogs(stackOne, {
    filter: {
      accountIds: "45355976281015164504,45355976281015164505",
      actions: "download,upload",
      childResources: "documents,time-off",
      endDate: "2020-01-01T00:00:00.000Z",
      httpMethods: "GET,POST",
      providers: "ashby,greenhouse",
      requestIds: "adbf752f-6457-4ddd-89b3-98ae2252b83b,adbf752f-6457-4ddd-89b3-98ae2252b83c",
      resources: "employees,users",
      services: "hris,ats",
      startDate: "2020-01-01T00:00:00.000Z",
      statusCodes: "200,400",
      subResources: "documents,employees",
      success: true,
    },
    orderBy: StackoneListStepLogsQueryParamOrderBy.EventDatetime,
    orderDirection: StackoneListStepLogsQueryParamOrderDirection.Asc,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestLogsListStepLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneListStepLogsRequest](../../sdk/models/operations/stackoneliststeplogsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListStepLogsResponse](../../sdk/models/operations/stackoneliststeplogsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |