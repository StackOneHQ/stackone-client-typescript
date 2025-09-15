# ActionsMetaPaginated

## Example Usage

```typescript
import { ActionsMetaPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsMetaPaginated = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.ActionsMeta](../../../sdk/models/shared/actionsmeta.md)[] | :heavy_minus_sign:                                                | The list of actions metadata                                      |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | Cursor for fetching the next page of results                      |