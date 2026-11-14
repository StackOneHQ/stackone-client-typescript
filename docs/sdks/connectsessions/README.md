# ConnectSessions

## Overview

Generate connection session tokens or auth URLs to allow your customers to connect their accounts.

### Available Operations

* [authenticateConnectSession](#authenticateconnectsession) - Authenticate Connect Session
* [createConnectSession](#createconnectsession) - Create Connect Session
* [getConnectSession](#getconnectsession) - Get Connect Session

## authenticateConnectSession

Exchanges a connect session token for the session it belongs to.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_authenticate_connect_session" method="post" path="/connect_sessions/authenticate" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.connectSessions.authenticateConnectSession({
    token: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { connectSessionsAuthenticateConnectSession } from "@stackone/stackone-client-ts/funcs/connectSessionsAuthenticateConnectSession.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await connectSessionsAuthenticateConnectSession(stackOne, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectSessionsAuthenticateConnectSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ConnectSessionAuthenticate](../../sdk/models/shared/connectsessionauthenticate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneAuthenticateConnectSessionResponse](../../sdk/models/operations/stackoneauthenticateconnectsessionresponse.md)\>**

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

## createConnectSession

Creates a short-lived connect session and returns the token and auth link that open the account-linking flow for one end-user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_create_connect_session" method="post" path="/connect_sessions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionCreateCategories, ConnectSessionCreateType } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.connectSessions.createConnectSession({
    categories: [
      ConnectSessionCreateCategories.Ats,
      ConnectSessionCreateCategories.Hris,
      ConnectSessionCreateCategories.Documents,
      ConnectSessionCreateCategories.Crm,
      ConnectSessionCreateCategories.Iam,
      ConnectSessionCreateCategories.Marketing,
      ConnectSessionCreateCategories.Lms,
      ConnectSessionCreateCategories.Iam,
      ConnectSessionCreateCategories.Documents,
      ConnectSessionCreateCategories.Ticketing,
      ConnectSessionCreateCategories.Screening,
      ConnectSessionCreateCategories.Messaging,
      ConnectSessionCreateCategories.Accounting,
      ConnectSessionCreateCategories.Scheduling,
    ],
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    type: ConnectSessionCreateType.Test,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { connectSessionsCreateConnectSession } from "@stackone/stackone-client-ts/funcs/connectSessionsCreateConnectSession.js";
import { ConnectSessionCreateCategories, ConnectSessionCreateType } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await connectSessionsCreateConnectSession(stackOne, {
    categories: [
      ConnectSessionCreateCategories.Ats,
      ConnectSessionCreateCategories.Hris,
      ConnectSessionCreateCategories.Documents,
      ConnectSessionCreateCategories.Crm,
      ConnectSessionCreateCategories.Iam,
      ConnectSessionCreateCategories.Marketing,
      ConnectSessionCreateCategories.Lms,
      ConnectSessionCreateCategories.Iam,
      ConnectSessionCreateCategories.Documents,
      ConnectSessionCreateCategories.Ticketing,
      ConnectSessionCreateCategories.Screening,
      ConnectSessionCreateCategories.Messaging,
      ConnectSessionCreateCategories.Accounting,
      ConnectSessionCreateCategories.Scheduling,
    ],
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    type: ConnectSessionCreateType.Test,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectSessionsCreateConnectSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ConnectSessionCreate](../../sdk/models/shared/connectsessioncreate.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneCreateConnectSessionResponse](../../sdk/models/operations/stackonecreateconnectsessionresponse.md)\>**

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

## getConnectSession

Returns a connect session and the state of its most recent connection attempt.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_connect_session" method="get" path="/connect_sessions/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.connectSessions.getConnectSession({
    id: 9637.9,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { connectSessionsGetConnectSession } from "@stackone/stackone-client-ts/funcs/connectSessionsGetConnectSession.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await connectSessionsGetConnectSession(stackOne, {
    id: 9637.9,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectSessionsGetConnectSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetConnectSessionRequest](../../sdk/models/operations/stackonegetconnectsessionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetConnectSessionResponse](../../sdk/models/operations/stackonegetconnectsessionresponse.md)\>**

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