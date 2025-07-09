# DocumentsSearchFilesRequest

## Example Usage

```typescript
import { DocumentsSearchFilesRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { DocumentsFilesSearchRequestDtoOperator, Operator } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsSearchFilesRequest = {
  documentsFilesSearchRequestDto: {
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
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `documentsFilesSearchRequestDto`                                                                      | [shared.DocumentsFilesSearchRequestDto](../../../sdk/models/shared/documentsfilessearchrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
| `xStackoneApiSessionToken`                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The session token                                                                                     |