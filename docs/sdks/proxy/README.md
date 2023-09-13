# proxy

### Available Operations

* [proxyRequestPost](#proxyrequestpost) - Proxy Request

## proxyRequestPost

Proxy Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ProxyRequestPostResponse, ProxyRequestPostSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";
import { ProxyRequestBodyMethod } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

const sdk = new StackOne();
const operationSecurity: ProxyRequestPostSecurity = {
  password: "",
  username: "",
};

sdk.proxy.proxyRequestPost({
  proxyRequestBody: {
    body: {},
    headers: {},
    method: ProxyRequestBodyMethod.Get,
    path: "/employees/directory",
    url: "https://api.sample-integration.com/v1",
  },
  xAccountId: "quasi",
}, operationSecurity).then((res: ProxyRequestPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ProxyRequestPostRequest](../../models/operations/proxyrequestpostrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ProxyRequestPostSecurity](../../models/operations/proxyrequestpostsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ProxyRequestPostResponse](../../models/operations/proxyrequestpostresponse.md)>**
