# StackoneGetUnifiedLogResponse

## Example Usage

```typescript
import { StackoneGetUnifiedLogResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetUnifiedLogResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 172150,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `unifiedLog`                                                          | [shared.UnifiedLog](../../../sdk/models/shared/unifiedlog.md)         | :heavy_minus_sign:                                                    | The unified log was retrieved.                                        |