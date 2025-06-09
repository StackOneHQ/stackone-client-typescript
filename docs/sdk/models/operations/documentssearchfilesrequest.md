# DocumentsSearchFilesRequest

## Example Usage

```typescript
import { DocumentsSearchFilesRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsSearchFilesRequest = {
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `documentsFilesSearchRequestDto`                                                                      | [shared.DocumentsFilesSearchRequestDto](../../../sdk/models/shared/documentsfilessearchrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
| `xStackoneApiSessionToken`                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The session token                                                                                     |