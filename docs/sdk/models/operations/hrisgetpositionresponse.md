# HrisGetPositionResponse

## Example Usage

```typescript
import { HrisGetPositionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetPositionResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 818556,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `positionResult`                                                      | [shared.PositionResult](../../../sdk/models/shared/positionresult.md) | :heavy_minus_sign:                                                    | The position with the given identifier was retrieved.                 |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |