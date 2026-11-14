# ActionsSyncedResponse

## Example Usage

```typescript
import { ActionsSyncedResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedResponse = {
  datasync: {
    lastFullRunId: "<id>",
    lastRunId: "<id>",
    paramsHash: "<value>",
    requestId: "<id>",
    syncExpiresAt: "<value>",
    syncId: "<id>",
    syncName: "<value>",
    syncedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregations`                                                                                                                                                                                  | Record<string, *any*>                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                              | Present when the request set a non-empty `aggs`: the OpenSearch aggregation results, keyed the same as the requested `aggs`. `data` is empty unless `page_size` was also set.                   |
| `data`                                                                                                                                                                                          | Record<string, *any*>[]                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | The synced records for the requested action                                                                                                                                                     |
| `datasync`                                                                                                                                                                                      | [shared.ActionsSyncedDatasync](../../../sdk/models/shared/actionssynceddatasync.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                              | Metadata about the datasync operation                                                                                                                                                           |
| `truncated`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                              | Present and `true` when the page was cut short to stay under the response size limit, so `data` holds fewer records than `page_size`. Continue from `skip` plus the number of records returned. |