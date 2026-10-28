# ActionsSyncedQueryableFieldsSync

## Example Usage

```typescript
import { ActionsSyncedQueryableFieldsSync } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedQueryableFieldsSync = {
  expiresAt: "1763934940220",
  syncId: "<id>",
  syncName: "<value>",
  syncedAt: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `expiresAt`                                                     | *string*                                                        | :heavy_check_mark:                                              | ISO 8601 timestamp of when the synced data expires              |
| `syncId`                                                        | *string*                                                        | :heavy_check_mark:                                              | Pass this as `sync_id` to read this sync.                       |
| `syncName`                                                      | *string*                                                        | :heavy_check_mark:                                              | The sync's raw name. Not unique, and may be the bare action id. |
| `syncedAt`                                                      | *string*                                                        | :heavy_check_mark:                                              | ISO 8601 timestamp of when the data was synced                  |