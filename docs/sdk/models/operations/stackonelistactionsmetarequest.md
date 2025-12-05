# StackoneListActionsMetaRequest

## Example Usage

```typescript
import { Include, StackoneListActionsMetaRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListActionsMetaRequest = {
  filter: {
    accountIds: "account1,account2",
    actionKey: "action1",
    connectors: "connector1,connector2",
  },
  groupBy: "[\"connector\"]",
  include: [
    Include.ActionDetails,
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `filter`                                                          | [operations.Filter](../../../sdk/models/operations/filter.md)     | :heavy_minus_sign:                                                | Actions Metadata filters                                          |                                                                   |
| `groupBy`                                                         | *string*                                                          | :heavy_minus_sign:                                                | The relation to group the results by                              | [<br/>"connector"<br/>]                                           |
| `include`                                                         | [operations.Include](../../../sdk/models/operations/include.md)[] | :heavy_minus_sign:                                                | Additional data to include in the response                        | [<br/>"action_details"<br/>]                                      |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | The unified cursor                                                |                                                                   |
| `pageSize`                                                        | *string*                                                          | :heavy_minus_sign:                                                | The number of results per page (default value is 25)              |                                                                   |