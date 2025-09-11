# Filter

Actions Metadata filters

## Example Usage

```typescript
import { Filter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: Filter = {
  accountIds: "account1,account2",
  actionKey: "action1",
  connectors: "connector1,connector2",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `accountIds`                                                    | *string*                                                        | :heavy_minus_sign:                                              | A comma-separated list of account IDs to filter the results by. | account1,account2                                               |
| `actionKey`                                                     | *string*                                                        | :heavy_minus_sign:                                              | The action key to filter the results by                         | action1                                                         |
| `connectors`                                                    | *string*                                                        | :heavy_minus_sign:                                              | A comma-separated list of connectors to filter the results by.  | connector1,connector2                                           |