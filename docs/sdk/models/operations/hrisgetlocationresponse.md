# HrisGetLocationResponse

## Example Usage

```typescript
import { HrisGetLocationResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetLocationResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  statusCode: 368347,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `hrisLocationResult`                                                          | [shared.HRISLocationResult](../../../sdk/models/shared/hrislocationresult.md) | :heavy_minus_sign:                                                            | The work location with the given identifier was retrieved.                    |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |