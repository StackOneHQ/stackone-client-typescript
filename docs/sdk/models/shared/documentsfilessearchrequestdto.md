# DocumentsFilesSearchRequestDto

## Example Usage

```typescript
import { DocumentsFilesSearchRequestDto, DocumentsFilesSearchRequestDtoOperator, Operator } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsFilesSearchRequestDto = {
  params: {
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
  },
  passthrough: {
    "other_known_names": "John Doe",
  },
  query: {
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
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `params`                                              | [shared.Params](../../../sdk/models/shared/params.md) | :heavy_minus_sign:                                    | The additional parameters of the query                |                                                       |
| `passthrough`                                         | Record<string, *any*>                                 | :heavy_minus_sign:                                    | Value to pass through to the provider                 | {<br/>"other_known_names": "John Doe"<br/>}           |
| `query`                                               | [shared.Query](../../../sdk/models/shared/query.md)   | :heavy_minus_sign:                                    | The search query                                      |                                                       |