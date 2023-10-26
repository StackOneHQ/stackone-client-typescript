# Proxy
(*proxy*)

### Available Operations

* [proxyRequest](#proxyrequest) - Proxy Request

## proxyRequest

Proxy Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ProxyRequestBodyMethod } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.proxy.proxyRequest({
    proxyRequestBody: {
      body: {},
      headers: {},
      path: "/employees/directory",
      url: "https://api.sample-integration.com/v1",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.StackoneProxyRequestRequest](../../models/operations/stackoneproxyrequestrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.StackoneProxyRequestResponse](../../models/operations/stackoneproxyrequestresponse.md)>**

