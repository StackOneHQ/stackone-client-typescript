# ConnectSessionsCreateResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `connectSessionToken`                                                    | [shared.ConnectSessionToken](../../models/shared/connectsessiontoken.md) | :heavy_minus_sign:                                                       | The details of the connect session created with token.                   |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)                  | :heavy_minus_sign:                                                       | Raw HTTP response; suitable for custom response parsing                  |