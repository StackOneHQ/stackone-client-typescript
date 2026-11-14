# ActionsSyncedQueryableField

## Example Usage

```typescript
import { ActionsSyncedQueryableField } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsSyncedQueryableField = {
  field: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `field`                                                       | *string*                                                      | :heavy_check_mark:                                            | Field name to use in `filter`, `sort`, `source` and `aggs`.   |
| `type`                                                        | *string*                                                      | :heavy_check_mark:                                            | The field type in the synced index, e.g. `keyword` or `date`. |