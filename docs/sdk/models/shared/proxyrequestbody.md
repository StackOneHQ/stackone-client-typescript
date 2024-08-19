# ProxyRequestBody

## Example Usage

```typescript
import { ProxyRequestBody } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ProxyRequestBody = {
    headers: {
        "Content-Type": "application/json",
    },
    path: "/employees/directory",
    url: "https://api.sample-integration.com/v1",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `body`                                                | Record<string, *any*>                                 | :heavy_minus_sign:                                    | The body of the request                               |                                                       |
| `headers`                                             | Record<string, *any*>                                 | :heavy_minus_sign:                                    | The headers to send in the request                    | {<br/>"Content-Type": "application/json"<br/>}        |
| `method`                                              | [shared.Method](../../../sdk/models/shared/method.md) | :heavy_minus_sign:                                    | The method of the request                             |                                                       |
| `path`                                                | *string*                                              | :heavy_minus_sign:                                    | The path of the request including any query paramters | /employees/directory                                  |
| `url`                                                 | *string*                                              | :heavy_minus_sign:                                    | The base url of the request                           | https://api.sample-integration.com/v1                 |