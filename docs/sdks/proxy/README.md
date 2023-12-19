# Proxy
(*proxy*)

### Available Operations

* [proxyRequest](#proxyrequest) - Proxy Request

## proxyRequest

Proxy Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { Method } from "@stackone/stackone-client-ts/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
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

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StackoneProxyRequestRequest](../../sdk/models/operations/stackoneproxyrequestrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.StackoneProxyRequestResponse](../../sdk/models/operations/stackoneproxyrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
