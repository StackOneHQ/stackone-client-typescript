# AtsListBackgroundCheckRequestResponse

## Example Usage

```typescript
import { AtsListBackgroundCheckRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListBackgroundCheckRequestResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `backgroundCheckOrderPaginated`                                                                     | [shared.BackgroundCheckOrderPaginated](../../../sdk/models/shared/backgroundcheckorderpaginated.md) | :heavy_minus_sign:                                                                                  | The list of background check requests was retrieved.                                                |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |