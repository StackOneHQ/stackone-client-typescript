# SearchQuery

## Example Usage

```typescript
import { Operator, SearchQuery } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SearchQuery = {
  field: "name",
  globalSearch: "test",
  operator: Operator.Equal,
  queries: [
    {
      field: "name",
      operator: Operator.Equal,
      value: "john",
    },
  ],
  value: "john",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `field`                                                           | *string*                                                          | :heavy_minus_sign:                                                | The specific field to search within                               | name                                                              |
| `globalSearch`                                                    | *string*                                                          | :heavy_minus_sign:                                                | The global search string to search in all text field              | test                                                              |
| `operator`                                                        | [shared.Operator](../../../sdk/models/shared/operator.md)         | :heavy_minus_sign:                                                | The Operator of the query                                         | equal                                                             |
| `queries`                                                         | [shared.SearchQuery](../../../sdk/models/shared/searchquery.md)[] | :heavy_minus_sign:                                                | Nested queries for complex search                                 | [<br/>{<br/>"operator": "equal",<br/>"field": "name",<br/>"value": "john"<br/>}<br/>] |
| `value`                                                           | *shared.SearchQueryValue*                                         | :heavy_minus_sign:                                                | The value to search for                                           | john                                                              |