# DocumentsSearchFilesRequest

## Example Usage

```typescript
import { DocumentsSearchFilesRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsSearchFilesRequest = {
  documentsFilesSearchRequestDto: {
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