# StackoneSearchActionsResponse

## Example Usage

```typescript
import { StackoneSearchActionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneSearchActionsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 114229,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `actionSearchResponseDto`                                                               | [shared.ActionSearchResponseDto](../../../sdk/models/shared/actionsearchresponsedto.md) | :heavy_minus_sign:                                                                      | Search results                                                                          |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |