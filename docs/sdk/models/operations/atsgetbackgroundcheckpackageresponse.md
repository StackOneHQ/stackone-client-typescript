# AtsGetBackgroundCheckPackageResponse

## Example Usage

```typescript
import { AtsGetBackgroundCheckPackageResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetBackgroundCheckPackageResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  statusCode: 479469,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `backgroundCheckPackageResult`                                                                    | [shared.BackgroundCheckPackageResult](../../../sdk/models/shared/backgroundcheckpackageresult.md) | :heavy_minus_sign:                                                                                | The background check package with the given identifier was retrieved.                             |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |