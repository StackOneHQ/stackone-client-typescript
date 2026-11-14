# Logs

## Overview

API request logs and analytics.

### Available Operations

* [getActionAdvancedLog](#getactionadvancedlog) - Get Action Advanced Log
* [getActionDefenderLog](#getactiondefenderlog) - Get Action Defender Log
* [getActionLog](#getactionlog) - Get Action Log
* [getActionPolicyLog](#getactionpolicylog) - Get Action Policy Log
* [getLogsStatsAggregate](#getlogsstatsaggregate) - Get Logs Stats Aggregate
* [getLogsStatsDimensions](#getlogsstatsdimensions) - Get Logs Stats Dimensions
* [getPlatformLogDimensions](#getplatformlogdimensions) - Get Platform Log Dimensions
* [getProviderAdvancedLog](#getprovideradvancedlog) - Get Provider Advanced Log
* [getProviderLog](#getproviderlog) - Get Provider Log
* [getStepAdvancedLog](#getstepadvancedlog) - Get Step Advanced Log
* [getStepLog](#getsteplog) - Get Step Log
* [getUnifiedAdvancedLog](#getunifiedadvancedlog) - Get Unified Advanced Log
* [getUnifiedLog](#getunifiedlog) - Get Unified Log
* [listActionLogs](#listactionlogs) - List Action Logs
* [listActionStepLogs](#listactionsteplogs) - List Action Step Logs
* [listLogs](#listlogs) - List Logs
* [listPlatformLogs](#listplatformlogs) - List Platform Logs
* [listProviderLogs](#listproviderlogs) - List Provider Logs
* [listStepLogs](#liststeplogs) - List Step Logs
* [listUnifiedLogs](#listunifiedlogs) - List Unified Logs
* [listUnifiedProviderLogs](#listunifiedproviderlogs) - List Unified Provider Logs

## getActionAdvancedLog

Returns the full HTTP request and response bodies for an action run. Fetch on demand when inspecting payloads — not for every row, as advanced logs are large.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_action_advanced_log" method="get" path="/logs/actions/{actionRunId}/advanced" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getActionAdvancedLog({
    actionRunId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetActionAdvancedLog } from "@stackone/stackone-client-ts/funcs/logsGetActionAdvancedLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetActionAdvancedLog(stackOne, {
    actionRunId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetActionAdvancedLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetActionAdvancedLogRequest](../../sdk/models/operations/stackonegetactionadvancedlogrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetActionAdvancedLogResponse](../../sdk/models/operations/stackonegetactionadvancedlogresponse.md)\>**

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

## getActionDefenderLog

Returns StackOne Defender scan results for an action run, including the risk classification and scores. Available when Defender is enabled; use to review the security assessment of AI agent tool calls.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_action_defender_log" method="get" path="/logs/actions/{actionRunId}/defender" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getActionDefenderLog({
    actionRunId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetActionDefenderLog } from "@stackone/stackone-client-ts/funcs/logsGetActionDefenderLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetActionDefenderLog(stackOne, {
    actionRunId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetActionDefenderLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetActionDefenderLogRequest](../../sdk/models/operations/stackonegetactiondefenderlogrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetActionDefenderLogResponse](../../sdk/models/operations/stackonegetactiondefenderlogresponse.md)\>**

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

## getActionLog

Returns the full metadata for a single action run identified by `action_run_id` — status, duration, connector, account, action, and event time. Use after locating an `action_run_id` from List Action Logs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_action_log" method="get" path="/logs/actions/{actionRunId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getActionLog({
    actionRunId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetActionLog } from "@stackone/stackone-client-ts/funcs/logsGetActionLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetActionLog(stackOne, {
    actionRunId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetActionLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetActionLogRequest](../../sdk/models/operations/stackonegetactionlogrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetActionLogResponse](../../sdk/models/operations/stackonegetactionlogresponse.md)\>**

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

## getActionPolicyLog

Returns the runtime policy decision recorded for an action run: the rules that decided, the version each was at when it decided, the level that decided, the acting principal, and anything a monitored rule observed. Available when the policy layer decided the call; a log row whose `policy_result` is `not_evaluated` has none.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_action_policy_log" method="get" path="/logs/actions/{actionRunId}/policy" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getActionPolicyLog({
    actionRunId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetActionPolicyLog } from "@stackone/stackone-client-ts/funcs/logsGetActionPolicyLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetActionPolicyLog(stackOne, {
    actionRunId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetActionPolicyLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetActionPolicyLogRequest](../../sdk/models/operations/stackonegetactionpolicylogrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetActionPolicyLogResponse](../../sdk/models/operations/stackonegetactionpolicylogresponse.md)\>**

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

## getLogsStatsAggregate

Returns aggregated log metrics — request volume, error counts, and latency — optionally grouped by one or more dimensions and bucketed into time intervals. Use for dashboards and trends instead of listing individual rows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_logs_stats_aggregate" method="post" path="/logs/stats/aggregate" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getLogsStatsAggregate({
    filters: null,
    intervalPeriod: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetLogsStatsAggregate } from "@stackone/stackone-client-ts/funcs/logsGetLogsStatsAggregate.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetLogsStatsAggregate(stackOne, {
    filters: null,
    intervalPeriod: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetLogsStatsAggregate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.AggregationPostDto](../../sdk/models/shared/aggregationpostdto.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetLogsStatsAggregateResponse](../../sdk/models/operations/stackonegetlogsstatsaggregateresponse.md)\>**

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

## getLogsStatsDimensions

Returns the distinct values available for the requested dimensions (for example connector, account, or status code). Use to populate filter controls and build breakdowns. Values of the `connector_key` dimension also carry a `label` holding the connector display name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_logs_stats_dimensions" method="post" path="/logs/stats/dimensions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { DimensionsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getLogsStatsDimensions({
    dimensions: [],
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      action: [
        "create_employee",
      ],
      actionId: [
        "get_employees",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      actionType: [
        "sync",
      ],
      category: [
        "hris",
      ],
      connectorKey: [
        "slack",
      ],
      connectorVersion: [
        "1.0.0",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      logId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      provider: [
        "hibob",
      ],
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      resource: [
        "employees",
      ],
      riskLevel: [
        DimensionsPostDtoRiskLevel.High,
        DimensionsPostDtoRiskLevel.Critical,
      ],
      service: [
        "hris",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      subResource: [
        "documents",
      ],
      success: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetLogsStatsDimensions } from "@stackone/stackone-client-ts/funcs/logsGetLogsStatsDimensions.js";
import { DimensionsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetLogsStatsDimensions(stackOne, {
    dimensions: [],
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      action: [
        "create_employee",
      ],
      actionId: [
        "get_employees",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      actionType: [
        "sync",
      ],
      category: [
        "hris",
      ],
      connectorKey: [
        "slack",
      ],
      connectorVersion: [
        "1.0.0",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      logId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      provider: [
        "hibob",
      ],
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      resource: [
        "employees",
      ],
      riskLevel: [
        DimensionsPostDtoRiskLevel.High,
        DimensionsPostDtoRiskLevel.Critical,
      ],
      service: [
        "hris",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      subResource: [
        "documents",
      ],
      success: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetLogsStatsDimensions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.DimensionsPostDto](../../sdk/models/shared/dimensionspostdto.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetLogsStatsDimensionsResponse](../../sdk/models/operations/stackonegetlogsstatsdimensionsresponse.md)\>**

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

## getPlatformLogDimensions

Returns the distinct values available for the requested platform-log dimensions (for example event type, actor, or source), with a count of matching events for each. Use to populate the filter controls on the platform trail without first reading a page of it. Pass `filters` to narrow the values to the rows a listing with those same filters would return, so the counts describe what the caller is looking at. Requires access to every account in the project, for the same reason listing the trail does.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_platform_log_dimensions" method="post" path="/logs/platform/dimensions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getPlatformLogDimensions({
    dimensions: [],
    filters: {
      action: [
        "create",
        "delete",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      eventType: [
        "account_create",
        "account_delete",
      ],
      isRead: false,
      resource: [
        "account",
        "webhook",
      ],
      resourceId: [
        "45355976281015164504",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
        "404",
      ],
      success: true,
      userEmail: [
        "person@example.com",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetPlatformLogDimensions } from "@stackone/stackone-client-ts/funcs/logsGetPlatformLogDimensions.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetPlatformLogDimensions(stackOne, {
    dimensions: [],
    filters: {
      action: [
        "create",
        "delete",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      eventType: [
        "account_create",
        "account_delete",
      ],
      isRead: false,
      resource: [
        "account",
        "webhook",
      ],
      resourceId: [
        "45355976281015164504",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
        "404",
      ],
      success: true,
      userEmail: [
        "person@example.com",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetPlatformLogDimensions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.PlatformDimensionsPostDto](../../sdk/models/shared/platformdimensionspostdto.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetPlatformLogDimensionsResponse](../../sdk/models/operations/stackonegetplatformlogdimensionsresponse.md)\>**

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

## getProviderAdvancedLog

Returns the full request and response bodies for a single provider request made while serving a unified request, identified by the unified `request_id` and the provider log `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_provider_advanced_log" method="get" path="/logs/unified/{requestId}/provider/{id}/advanced" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getProviderAdvancedLog({
    id: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetProviderAdvancedLog } from "@stackone/stackone-client-ts/funcs/logsGetProviderAdvancedLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetProviderAdvancedLog(stackOne, {
    id: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetProviderAdvancedLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetProviderAdvancedLogRequest](../../sdk/models/operations/stackonegetprovideradvancedlogrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetProviderAdvancedLogResponse](../../sdk/models/operations/stackonegetprovideradvancedlogresponse.md)\>**

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

## getProviderLog

Returns the metadata for a single provider request made while serving a unified request, identified by the unified `request_id` and the provider log `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_provider_log" method="get" path="/logs/unified/{requestId}/provider/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getProviderLog({
    id: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetProviderLog } from "@stackone/stackone-client-ts/funcs/logsGetProviderLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetProviderLog(stackOne, {
    id: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetProviderLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetProviderLogRequest](../../sdk/models/operations/stackonegetproviderlogrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetProviderLogResponse](../../sdk/models/operations/stackonegetproviderlogresponse.md)\>**

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

## getStepAdvancedLog

Returns the full request and response bodies for a single step of an action run, identified by `action_run_id` and `step_index`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_step_advanced_log" method="get" path="/logs/actions/{actionRunId}/steps/{stepIndex}/advanced" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getStepAdvancedLog({
    actionRunId: "<id>",
    stepIndex: 7982.24,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetStepAdvancedLog } from "@stackone/stackone-client-ts/funcs/logsGetStepAdvancedLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetStepAdvancedLog(stackOne, {
    actionRunId: "<id>",
    stepIndex: 7982.24,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetStepAdvancedLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetStepAdvancedLogRequest](../../sdk/models/operations/stackonegetstepadvancedlogrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetStepAdvancedLogResponse](../../sdk/models/operations/stackonegetstepadvancedlogresponse.md)\>**

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

## getStepLog

Returns the metadata for a single step within an action run, identified by its `step_index`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_step_log" method="get" path="/logs/actions/{actionRunId}/steps/{stepIndex}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getStepLog({
    actionRunId: "<id>",
    stepIndex: 6773,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetStepLog } from "@stackone/stackone-client-ts/funcs/logsGetStepLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetStepLog(stackOne, {
    actionRunId: "<id>",
    stepIndex: 6773,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetStepLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetStepLogRequest](../../sdk/models/operations/stackonegetsteplogrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetStepLogResponse](../../sdk/models/operations/stackonegetsteplogresponse.md)\>**

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

## getUnifiedAdvancedLog

Returns the full request and response bodies for a single unified request, identified by `request_id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_unified_advanced_log" method="get" path="/logs/unified/{requestId}/advanced" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getUnifiedAdvancedLog({
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetUnifiedAdvancedLog } from "@stackone/stackone-client-ts/funcs/logsGetUnifiedAdvancedLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetUnifiedAdvancedLog(stackOne, {
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetUnifiedAdvancedLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetUnifiedAdvancedLogRequest](../../sdk/models/operations/stackonegetunifiedadvancedlogrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetUnifiedAdvancedLogResponse](../../sdk/models/operations/stackonegetunifiedadvancedlogresponse.md)\>**

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

## getUnifiedLog

Returns the metadata for a single unified request log identified by `request_id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_unified_log" method="get" path="/logs/unified/{requestId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.getUnifiedLog({
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsGetUnifiedLog } from "@stackone/stackone-client-ts/funcs/logsGetUnifiedLog.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsGetUnifiedLog(stackOne, {
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetUnifiedLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetUnifiedLogRequest](../../sdk/models/operations/stackonegetunifiedlogrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetUnifiedLogResponse](../../sdk/models/operations/stackonegetunifiedlogresponse.md)\>**

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

## listActionLogs

Returns a paginated list of action logs. Each row summarises a single action or RPC execution and includes an `action_run_id` for drilling into its detail, steps, and advanced payloads.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_action_logs" method="post" path="/logs/actions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listActionLogs({
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      actionId: [
        "get_employees",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      actionType: [
        "sync",
      ],
      category: [
        "hris",
      ],
      connectorKey: [
        "slack",
      ],
      connectorVersion: [
        "1.0.0",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      success: true,
    },
    page: 1,
    pageSize: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListActionLogs } from "@stackone/stackone-client-ts/funcs/logsListActionLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListActionLogs(stackOne, {
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      actionId: [
        "get_employees",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      actionType: [
        "sync",
      ],
      category: [
        "hris",
      ],
      connectorKey: [
        "slack",
      ],
      connectorVersion: [
        "1.0.0",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      success: true,
    },
    page: 1,
    pageSize: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListActionLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ActionLogsPostDto](../../sdk/models/shared/actionlogspostdto.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListActionLogsResponse](../../sdk/models/operations/stackonelistactionlogsresponse.md)\>**

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

## listActionStepLogs

Returns the connector execution steps for a single action run, in execution order. Use to examine the individual steps of a request when debugging a failure.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_action_step_logs" method="get" path="/logs/actions/{actionRunId}/steps" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listActionStepLogs({
    actionRunId: "<id>",
    page: 2239.51,
    pageSize: 6392.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListActionStepLogs } from "@stackone/stackone-client-ts/funcs/logsListActionStepLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListActionStepLogs(stackOne, {
    actionRunId: "<id>",
    page: 2239.51,
    pageSize: 6392.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListActionStepLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneListActionStepLogsRequest](../../sdk/models/operations/stackonelistactionsteplogsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListActionStepLogsResponse](../../sdk/models/operations/stackonelistactionsteplogsresponse.md)\>**

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

Returns a paginated list of logs. Each log includes a `log_type` discriminator field with possible values: `action` or `unified`. Use the `log_type` filter to request specific types.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_logs" method="post" path="/logs" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { LogsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listLogs({
    logsPostDto: {
      filters: {
        accountSecureId: [
          "45355976281015164504",
        ],
        action: [
          "create_employee",
        ],
        actionId: [
          "get_employees",
        ],
        actionRunId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        actionType: [
          "sync",
        ],
        category: [
          "hris",
        ],
        connectorKey: [
          "slack",
        ],
        connectorVersion: [
          "1.0.0",
        ],
        endTime: "2025-01-31T23:59:59.999Z",
        logId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        mode: [
          "production",
        ],
        originOwnerId: [
          "owner-123",
        ],
        provider: [
          "hibob",
        ],
        requestId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        resource: [
          "employees",
        ],
        riskLevel: [
          LogsPostDtoRiskLevel.High,
          LogsPostDtoRiskLevel.Critical,
        ],
        service: [
          "hris",
        ],
        sourceId: [
          "1234567890",
        ],
        sourceType: [
          "DASHBOARD",
        ],
        startTime: "2025-01-01T00:00:00.000Z",
        statusCode: [
          "200",
        ],
        subResource: [
          "documents",
        ],
        success: true,
      },
      page: 1,
      pageSize: 25,
    },
    expand: "connector",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListLogs } from "@stackone/stackone-client-ts/funcs/logsListLogs.js";
import { LogsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListLogs(stackOne, {
    logsPostDto: {
      filters: {
        accountSecureId: [
          "45355976281015164504",
        ],
        action: [
          "create_employee",
        ],
        actionId: [
          "get_employees",
        ],
        actionRunId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        actionType: [
          "sync",
        ],
        category: [
          "hris",
        ],
        connectorKey: [
          "slack",
        ],
        connectorVersion: [
          "1.0.0",
        ],
        endTime: "2025-01-31T23:59:59.999Z",
        logId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        mode: [
          "production",
        ],
        originOwnerId: [
          "owner-123",
        ],
        provider: [
          "hibob",
        ],
        requestId: [
          "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        ],
        resource: [
          "employees",
        ],
        riskLevel: [
          LogsPostDtoRiskLevel.High,
          LogsPostDtoRiskLevel.Critical,
        ],
        service: [
          "hris",
        ],
        sourceId: [
          "1234567890",
        ],
        sourceType: [
          "DASHBOARD",
        ],
        startTime: "2025-01-01T00:00:00.000Z",
        statusCode: [
          "200",
        ],
        subResource: [
          "documents",
        ],
        success: true,
      },
      page: 1,
      pageSize: 25,
    },
    expand: "connector",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListLogs failed:", res.error);
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

## listPlatformLogs

Returns a paginated list of platform logs — the audit trail of operations on StackOne itself, such as creating an account or deleting an integration, as opposed to requests proxied to a provider. Filter `resource` for everything that happened to a kind of thing (`account`), `resource_id` for everything that happened to one of them, and `action` for a kind of operation (`create`). `event_type` carries the pair as one value (`account_create`) and remains filterable. A few operations are not tied to a resource — the AI and playground routes — and their `event_type` is the bare action (`check`, `playground_build`) with `resource` unset. Requires access to every account in the project: a member restricted to a subset of accounts is refused, because the trail cannot be meaningfully filtered to their accounts and its rows can reveal activity on accounts they cannot read.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_platform_logs" method="post" path="/logs/platform" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listPlatformLogs({
    filters: {
      action: [
        "create",
        "delete",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      eventType: [
        "account_create",
        "account_delete",
      ],
      isRead: false,
      resource: [
        "account",
        "webhook",
      ],
      resourceId: [
        "45355976281015164504",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
        "404",
      ],
      success: true,
      userEmail: [
        "person@example.com",
      ],
    },
    page: 1,
    pageSize: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListPlatformLogs } from "@stackone/stackone-client-ts/funcs/logsListPlatformLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListPlatformLogs(stackOne, {
    filters: {
      action: [
        "create",
        "delete",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      eventType: [
        "account_create",
        "account_delete",
      ],
      isRead: false,
      resource: [
        "account",
        "webhook",
      ],
      resourceId: [
        "45355976281015164504",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
        "404",
      ],
      success: true,
      userEmail: [
        "person@example.com",
      ],
    },
    page: 1,
    pageSize: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListPlatformLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.PlatformLogsPostDto](../../sdk/models/shared/platformlogspostdto.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListPlatformLogsResponse](../../sdk/models/operations/stackonelistplatformlogsresponse.md)\>**

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

## listProviderLogs

Returns a paginated list of provider request logs — the raw requests StackOne sent to the downstream provider.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_provider_logs" method="post" path="/logs/provider" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listProviderLogs({
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      success: true,
    },
    page: 1,
    pageSize: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListProviderLogs } from "@stackone/stackone-client-ts/funcs/logsListProviderLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListProviderLogs(stackOne, {
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      success: true,
    },
    page: 1,
    pageSize: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListProviderLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ProviderLogsPostDto](../../sdk/models/shared/providerlogspostdto.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListProviderLogsResponse](../../sdk/models/operations/stackonelistproviderlogsresponse.md)\>**

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

Returns a paginated list of connector execution steps across action runs. Each action runs as one or more steps; use this to find steps without first selecting an action run.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_step_logs" method="post" path="/logs/steps" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listStepLogs({
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      startTime: "2025-01-01T00:00:00.000Z",
      success: true,
    },
    page: 1,
    pageSize: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListStepLogs } from "@stackone/stackone-client-ts/funcs/logsListStepLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListStepLogs(stackOne, {
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      actionRunId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      startTime: "2025-01-01T00:00:00.000Z",
      success: true,
    },
    page: 1,
    pageSize: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListStepLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.StepsLogsPostDto](../../sdk/models/shared/stepslogspostdto.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listUnifiedLogs

Returns a paginated list of unified request logs — StackOne-normalized API requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_unified_logs" method="post" path="/logs/unified" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listUnifiedLogs({
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      action: [
        "create_employee",
      ],
      connectorKey: [
        "slack",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      resource: [
        "employees",
      ],
      service: [
        "hris",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      success: true,
    },
    page: 1,
    pageSize: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListUnifiedLogs } from "@stackone/stackone-client-ts/funcs/logsListUnifiedLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListUnifiedLogs(stackOne, {
    filters: {
      accountSecureId: [
        "45355976281015164504",
      ],
      action: [
        "create_employee",
      ],
      connectorKey: [
        "slack",
      ],
      endTime: "2025-01-31T23:59:59.999Z",
      mode: [
        "production",
      ],
      originOwnerId: [
        "owner-123",
      ],
      requestId: [
        "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      ],
      resource: [
        "employees",
      ],
      service: [
        "hris",
      ],
      sourceId: [
        "1234567890",
      ],
      sourceType: [
        "DASHBOARD",
      ],
      startTime: "2025-01-01T00:00:00.000Z",
      statusCode: [
        "200",
      ],
      success: true,
    },
    page: 1,
    pageSize: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListUnifiedLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.UnifiedLogsPostDto](../../sdk/models/shared/unifiedlogspostdto.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListUnifiedLogsResponse](../../sdk/models/operations/stackonelistunifiedlogsresponse.md)\>**

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

## listUnifiedProviderLogs

Returns the underlying provider requests StackOne made while serving a single unified request, identified by `request_id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_unified_provider_logs" method="get" path="/logs/unified/{requestId}/provider" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.logs.listUnifiedProviderLogs({
    page: 6031.38,
    pageSize: 6484.47,
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { logsListUnifiedProviderLogs } from "@stackone/stackone-client-ts/funcs/logsListUnifiedProviderLogs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await logsListUnifiedProviderLogs(stackOne, {
    page: 6031.38,
    pageSize: 6484.47,
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsListUnifiedProviderLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneListUnifiedProviderLogsRequest](../../sdk/models/operations/stackonelistunifiedproviderlogsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListUnifiedProviderLogsResponse](../../sdk/models/operations/stackonelistunifiedproviderlogsresponse.md)\>**

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