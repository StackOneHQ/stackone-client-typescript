# AtsGetBackgroundCheckRequestResponse

## Example Usage

```typescript
import { AtsGetBackgroundCheckRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetBackgroundCheckRequestResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `backgroundCheckOrderResult`                                                                  | [shared.BackgroundCheckOrderResult](../../../sdk/models/shared/backgroundcheckorderresult.md) | :heavy_minus_sign:                                                                            | The background check order with the given identifier was retrieved.                           |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |