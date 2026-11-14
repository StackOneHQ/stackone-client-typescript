# Mcp

## Overview

Model Context Protocol endpoint.

### Available Operations

* [mcpPost](#mcppost) - Send MCP JSON-RPC message

## mcpPost

Send JSON-RPC request to the MCP server over HTTP streaming transport

### Example Usage: initialize

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="initialize" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "init-1",
      jsonrpc: "2.0",
      method: "initialize",
      params: {},
    },
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "init-1",
      jsonrpc: "2.0",
      method: "initialize",
      params: {},
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: protocolError

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="protocolError" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
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
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsCall

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsCall" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "call-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
    },
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "call-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsCallError

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsCallError" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
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
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsCallExecuteAction

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsCallExecuteAction" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "execute-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
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
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "execute-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsCallSearchExecute

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsCallSearchExecute" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "search-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
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
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "search-1",
      jsonrpc: "2.0",
      method: "tools/call",
      params: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsCallSuccess

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsCallSuccess" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
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
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      jsonrpc: "2.0",
      method: "initialize",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```
### Example Usage: toolsList

<!-- UsageSnippet language="typescript" operationID="stackone_mcp_post" method="post" path="/mcp" example="toolsList" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne();

async function run() {
  const result = await stackOne.mcp.mcpPost({
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "list-1",
      jsonrpc: "2.0",
      method: "tools/list",
      params: {},
    },
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { mcpMCPPost } from "@stackone/stackone-client-ts/funcs/mcpMCPPost.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore();

async function run() {
  const res = await mcpMCPPost(stackOne, {
    apiKey: "<YOUR_API_KEY_HERE>",
  }, {
    jsonRpcMessageDto: {
      id: "list-1",
      jsonrpc: "2.0",
      method: "tools/list",
      params: {},
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpMCPPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneMcpPostRequest](../../sdk/models/operations/stackonemcppostrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.StackoneMcpPostSecurity](../../sdk/models/operations/stackonemcppostsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StackoneMcpPostResponse](../../sdk/models/operations/stackonemcppostresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |