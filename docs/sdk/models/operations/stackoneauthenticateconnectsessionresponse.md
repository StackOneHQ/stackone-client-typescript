# StackoneAuthenticateConnectSessionResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `connectSession`                                                      | [shared.ConnectSession](../../../sdk/models/shared/connectsession.md) | :heavy_minus_sign:                                                    | The details of the authenticated connect session.                     |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                    | Raw HTTP response; suitable for custom response parsing               |