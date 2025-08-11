# ScreeningCreateScreeningOrderResponse

## Example Usage

```typescript
import { ScreeningCreateScreeningOrderResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: ScreeningCreateScreeningOrderResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [],
  },
  statusCode: 160444,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `createResult`                                                        | [shared.CreateResult](../../../sdk/models/shared/createresult.md)     | :heavy_minus_sign:                                                    | The screening order was created.                                      |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |