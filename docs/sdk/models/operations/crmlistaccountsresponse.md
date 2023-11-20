# CrmListAccountsResponse


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountsPaginated`                                                         | [shared.AccountsPaginated](../../../sdk/models/shared/accountspaginated.md) | :heavy_minus_sign:                                                          | The list of accounts was retrieved.                                         |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)                     | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |