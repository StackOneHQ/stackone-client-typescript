# ActionsSyncedSyncChoice

## Example Usage

```typescript
import { ActionsSyncedSyncChoice } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedSyncChoice = {
  syncId: "<id>",
  syncLabel: "<value>",
  syncName: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `syncId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Pass this as `sync_id` to select this sync.                                                                                |
| `syncLabel`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Disambiguated label: the name, with parameters appended when the name alone does not distinguish this choice from another. |
| `syncName`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The sync's raw name. Not unique, and may be the bare action id.                                                            |