# StackoneRpcActionSyncedQueryableFieldsResponse

## Example Usage

```typescript
import { StackoneRpcActionSyncedQueryableFieldsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneRpcActionSyncedQueryableFieldsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 633181,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `actionsSyncedQueryableFieldsResponse`                                                                            | [shared.ActionsSyncedQueryableFieldsResponse](../../../sdk/models/shared/actionssyncedqueryablefieldsresponse.md) | :heavy_minus_sign:                                                                                                | The queryable fields and the readable syncs of the action.                                                        |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |