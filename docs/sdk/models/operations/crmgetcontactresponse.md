# CrmGetContactResponse


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contactResult`                                                     | [shared.ContactResult](../../../sdk/models/shared/contactresult.md) | :heavy_minus_sign:                                                  | The contact with the given identifier was retrieved.                |
| `contentType`                                                       | *string*                                                            | :heavy_check_mark:                                                  | HTTP response content type for this operation                       |
| `statusCode`                                                        | *number*                                                            | :heavy_check_mark:                                                  | HTTP response status code for this operation                        |
| `rawResponse`                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)             | :heavy_check_mark:                                                  | Raw HTTP response; suitable for custom response parsing             |