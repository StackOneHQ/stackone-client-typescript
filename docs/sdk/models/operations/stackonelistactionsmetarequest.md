# StackoneListActionsMetaRequest

## Example Usage

```typescript
import { ExcludeT, Include, StackoneListActionsMetaRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListActionsMetaRequest = {
  exclude: [
    ExcludeT.Actions,
  ],
  filter: {
    accountIds: "account1,account2",
    actionKey: "action1",
    connectors: "connector1,connector2",
  },
  groupBy: "[\"connector\"]",
  include: [
    Include.ActionDetails,
    Include.AuthenticationGuides,
  ],
  search: "employee",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `exclude`                                                                 | [operations.ExcludeT](../../../sdk/models/operations/excludet.md)[]       | :heavy_minus_sign:                                                        | Data to exclude from the response                                         | [<br/>"actions"<br/>]                                                     |
| `filter`                                                                  | [operations.Filter](../../../sdk/models/operations/filter.md)             | :heavy_minus_sign:                                                        | Actions Metadata filters                                                  |                                                                           |
| `groupBy`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | The relation to group the results by                                      | [<br/>"connector"<br/>]                                                   |
| `include`                                                                 | [operations.Include](../../../sdk/models/operations/include.md)[]         | :heavy_minus_sign:                                                        | Additional data to include in the response                                | [<br/>"action_details",<br/>"authentication_guides"<br/>]                 |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The unified cursor                                                        |                                                                           |
| `pageSize`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | The number of results per page (default value is 25)                      |                                                                           |
| `search`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Text search across provider names, action labels, and action descriptions | employee                                                                  |