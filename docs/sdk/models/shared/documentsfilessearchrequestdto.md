# DocumentsFilesSearchRequestDto

## Example Usage

```typescript
import { DocumentsFilesSearchRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsFilesSearchRequestDto = {
  field: "name",
  operationType: {
    sourceValue: "contains",
  },
  params: {
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
  },
  passthrough: {
    "other_known_names": "John Doe",
  },
  query: "test",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The specific field to search within. If not provided, the search will be performed across all searchable text fields | name                                                                                                                 |
| `operationType`                                                                                                      | [shared.OperationType](../../../sdk/models/shared/operationtype.md)                                                  | :heavy_minus_sign:                                                                                                   | The operation type to use for the query. If not provided, the default operation is `contains`.                       |                                                                                                                      |
| `params`                                                                                                             | [shared.Params](../../../sdk/models/shared/params.md)                                                                | :heavy_minus_sign:                                                                                                   | The additional parameters of the query                                                                               |                                                                                                                      |
| `passthrough`                                                                                                        | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Value to pass through to the provider                                                                                | {<br/>"other_known_names": "John Doe"<br/>}                                                                          |
| `query`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The query to search for                                                                                              | test                                                                                                                 |