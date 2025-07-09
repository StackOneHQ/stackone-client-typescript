# StackoneProxyRequestRequest

## Example Usage

```typescript
import { StackoneProxyRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneProxyRequestRequest = {
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `proxyRequestBody`                                                        | [shared.ProxyRequestBody](../../../sdk/models/shared/proxyrequestbody.md) | :heavy_check_mark:                                                        | The request body                                                          |
| `xAccountId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The account identifier                                                    |