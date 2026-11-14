# StackoneRpcActionSyncedResponseBody

Synced action data, or a refusal payload explaining why none was returned.


## Supported Types

### `shared.ActionsSyncedResponse`

```typescript
const value: shared.ActionsSyncedResponse = {
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

### `shared.ActionsSyncedRefusal`

```typescript
const value: shared.ActionsSyncedRefusal = {
  actionId: "<id>",
  message: "<value>",
  synced: false,
};
```

