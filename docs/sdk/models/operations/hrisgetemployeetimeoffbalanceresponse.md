# HrisGetEmployeeTimeOffBalanceResponse

## Example Usage

```typescript
import { HrisGetEmployeeTimeOffBalanceResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeTimeOffBalanceResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 817113,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `timeOffBalanceResult`                                                            | [shared.TimeOffBalanceResult](../../../sdk/models/shared/timeoffbalanceresult.md) | :heavy_minus_sign:                                                                | The time off balance of the employee with the given identifier was retrieved.     |