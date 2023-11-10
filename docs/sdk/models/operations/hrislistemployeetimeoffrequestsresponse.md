# HrisListEmployeeTimeOffRequestsResponse


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [AxiosResponse](https://axios-http.com/docs/res_schema)                                 | :heavy_minus_sign:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `timeOffPaginated`                                                                      | [shared.TimeOffPaginated](../../../sdk/models/shared/timeoffpaginated.md)               | :heavy_minus_sign:                                                                      | The time off requests related to the employee with the given identifier were retrieved. |