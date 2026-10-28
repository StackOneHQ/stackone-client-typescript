# ActionsSyncedQueryableFieldsResponse

## Example Usage

```typescript
import { ActionsSyncedQueryableFieldsResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedQueryableFieldsResponse = {
  actionId: "<id>",
  fields: [],
  syncs: [
    {
      expiresAt: "1745493933499",
      syncId: "<id>",
      syncName: "<value>",
      syncedAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The action the fields belong to.                                                                            |
| `expiresAt`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Present only when there is exactly one readable sync: when it expires.                                      |
| `fields`                                                                                                    | [shared.ActionsSyncedQueryableField](../../../sdk/models/shared/actionssyncedqueryablefield.md)[]           | :heavy_check_mark:                                                                                          | Fields discovered from this account's synced records. Empty when the action has no readable sync yet.       |
| `syncedAt`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Present only when there is exactly one readable sync: when it was synced.                                   |
| `syncs`                                                                                                     | [shared.ActionsSyncedQueryableFieldsSync](../../../sdk/models/shared/actionssyncedqueryablefieldssync.md)[] | :heavy_check_mark:                                                                                          | Each readable sync of the action, with its freshness.                                                       |