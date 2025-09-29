# HrisGetEmployeeShiftResponse

## Example Usage

```typescript
import { HrisGetEmployeeShiftResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeShiftResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  statusCode: 428061,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `hrisShiftResult`                                                             | [shared.HrisShiftResult](../../../sdk/models/shared/hrisshiftresult.md)       | :heavy_minus_sign:                                                            | The shift with the given identifier for the specified employee was retrieved. |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |