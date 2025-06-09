# AtsMoveApplicationResponse

## Example Usage

```typescript
import { AtsMoveApplicationResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsMoveApplicationResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `moveApplicationResult`                                                             | [shared.MoveApplicationResult](../../../sdk/models/shared/moveapplicationresult.md) | :heavy_minus_sign:                                                                  | The application was moved successfully.                                             |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |