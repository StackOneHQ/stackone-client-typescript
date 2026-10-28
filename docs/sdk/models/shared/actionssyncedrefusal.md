# ActionsSyncedRefusal

## Example Usage

```typescript
import { ActionsSyncedRefusal } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedRefusal = {
  actionId: "<id>",
  message: "<value>",
  synced: false,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The action this refusal is about.                                                                                            |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Human-readable explanation of why no data was returned.                                                                      |
| `synced`                                                                                                                     | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | Always false: no synced data was returned.                                                                                   |
| `syncs`                                                                                                                      | [shared.ActionsSyncedSyncChoice](../../../sdk/models/shared/actionssyncedsyncchoice.md)[]                                    | :heavy_minus_sign:                                                                                                           | Present when the account has more than one sync of this action: the sync_id choices — pass one as `sync_id` to disambiguate. |