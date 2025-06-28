# Query

The search query

## Example Usage

```typescript
import { DocumentsFilesSearchRequestDtoOperator, Operator, Query } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Query = {
  field: "name",
  globalSearch: "test",
  operator: DocumentsFilesSearchRequestDtoOperator.Equal,
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

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The specific field to search within                                                                                   | name                                                                                                                  |
| `globalSearch`                                                                                                        | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The global search string to search in all text field                                                                  | test                                                                                                                  |
| `operator`                                                                                                            | [shared.DocumentsFilesSearchRequestDtoOperator](../../../sdk/models/shared/documentsfilessearchrequestdtooperator.md) | :heavy_minus_sign:                                                                                                    | The Operator of the query                                                                                             | equal                                                                                                                 |
| `queries`                                                                                                             | [shared.SearchQuery](../../../sdk/models/shared/searchquery.md)[]                                                     | :heavy_minus_sign:                                                                                                    | Nested queries for complex search                                                                                     | [<br/>{<br/>"operator": "equal",<br/>"field": "name",<br/>"value": "john"<br/>}<br/>]                                 |
| `value`                                                                                                               | *shared.DocumentsFilesSearchRequestDtoValue*                                                                          | :heavy_minus_sign:                                                                                                    | The value to search for                                                                                               | john                                                                                                                  |