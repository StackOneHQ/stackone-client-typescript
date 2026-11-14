# StackoneRpcActionSyncedResponse

## Example Usage

```typescript
import { StackoneRpcActionSyncedResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneRpcActionSyncedResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  statusCode: 106173,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)      | :heavy_check_mark:                                                         | Raw HTTP response; suitable for custom response parsing                    |
| `oneOf`                                                                    | *operations.StackoneRpcActionSyncedResponseBody*                           | :heavy_minus_sign:                                                         | Synced action data, or a refusal payload explaining why none was returned. |