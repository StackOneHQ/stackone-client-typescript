# ActionsSyncedDatasync

## Example Usage

```typescript
import { ActionsSyncedDatasync } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedDatasync = {
  lastFullRunId: "<id>",
  lastRunId: "<id>",
  paramsHash: "<value>",
  requestId: "<id>",
  syncExpiresAt: "<value>",
  syncId: "<id>",
  syncName: "<value>",
  syncedAt: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `lastFullRunId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Run ID of the last successful full sync — the generation that produced the currently-readable data. Informational. |
| `lastRunId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Run ID of the most recent run that produced or refreshed data for this scope. Informational.                       |
| `paramsHash`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Hash of the canonicalized sync parameters (pagination and undeclared keys stripped)                                |
| `requestId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique request ID for this sync read                                                                           |
| `syncExpiresAt`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ISO 8601 timestamp of when the synced data expires                                                                 |
| `syncId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Which sync served this read.                                                                                       |
| `syncName`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The served sync's raw name. Not unique, and may be the bare action id.                                             |
| `syncedAt`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ISO 8601 timestamp of when the data was synced                                                                     |