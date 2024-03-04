# ProxyRequestBody


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `body`                                                  | [shared.Body](../../../sdk/models/shared/body.md)       | :heavy_minus_sign:                                      | The body of the request                                 |                                                         |
| `headers`                                               | [shared.Headers](../../../sdk/models/shared/headers.md) | :heavy_minus_sign:                                      | The headers to send in the request                      | {<br/>"Accept": "application/json"<br/>}                |
| `method`                                                | [shared.Method](../../../sdk/models/shared/method.md)   | :heavy_minus_sign:                                      | The method of the request                               |                                                         |
| `path`                                                  | *string*                                                | :heavy_minus_sign:                                      | The path of the request including any query paramters   | /employees/directory                                    |
| `url`                                                   | *string*                                                | :heavy_minus_sign:                                      | The base url of the request                             | https://api.sample-integration.com/v1                   |