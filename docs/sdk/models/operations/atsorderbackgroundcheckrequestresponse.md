# AtsOrderBackgroundCheckRequestResponse

## Example Usage

```typescript
import { AtsOrderBackgroundCheckRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsOrderBackgroundCheckRequestResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  statusCode: 735084,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `createBackgroundCheckOrderResult`                                                                        | [shared.CreateBackgroundCheckOrderResult](../../../sdk/models/shared/createbackgroundcheckorderresult.md) | :heavy_minus_sign:                                                                                        | The order request of the background check for candidate.                                                  |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |