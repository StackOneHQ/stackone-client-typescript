# StackoneProxyRequestRequest

## Example Usage

```typescript
import { StackoneProxyRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneProxyRequestRequest = {
  prefer: "heartbeat",
  proxyRequestBody: {
    headers: {
      "Content-Type": "application/json",
    },
    path: "/employees/directory",
    url: "https://api.sample-integration.com/v1",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `proxyRequestBody`                                                                                                                                                       | [shared.ProxyRequestBody](../../../sdk/models/shared/proxyrequestbody.md)                                                                                                | :heavy_check_mark:                                                                                                                                                       | The request body                                                                                                                                                         |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |