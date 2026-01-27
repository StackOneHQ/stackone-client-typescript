# Connectors

## Overview

Retrieve metadata for connectors.

### Available Operations

* [getConnectorMeta](#getconnectormeta) - Get Connector Meta Information
* [listConnectorsMeta](#listconnectorsmeta) - List Connector Meta Information

## getConnectorMeta

Get Connector Meta Information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_get_connector_meta" method="get" path="/connectors/meta/{provider}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.connectors.getConnectorMeta({
    include: "field_path,unmapped_fields,resources,inactive,webhooks,static_fields",
    provider: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { connectorsGetConnectorMeta } from "@stackone/stackone-client-ts/funcs/connectorsGetConnectorMeta.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await connectorsGetConnectorMeta(stackOne, {
    include: "field_path,unmapped_fields,resources,inactive,webhooks,static_fields",
    provider: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorsGetConnectorMeta failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneGetConnectorMetaRequest](../../sdk/models/operations/stackonegetconnectormetarequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneGetConnectorMetaResponse](../../sdk/models/operations/stackonegetconnectormetaresponse.md)\>**

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

## listConnectorsMeta

List Connector Meta Information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stackone_list_connectors_meta" method="get" path="/connectors/meta" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.connectors.listConnectorsMeta({
    include: "field_path,unmapped_fields,resources,inactive,webhooks,static_fields",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { connectorsListConnectorsMeta } from "@stackone/stackone-client-ts/funcs/connectorsListConnectorsMeta.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await connectorsListConnectorsMeta(stackOne, {
    include: "field_path,unmapped_fields,resources,inactive,webhooks,static_fields",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorsListConnectorsMeta failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneListConnectorsMetaRequest](../../sdk/models/operations/stackonelistconnectorsmetarequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneListConnectorsMetaResponse](../../sdk/models/operations/stackonelistconnectorsmetaresponse.md)\>**

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