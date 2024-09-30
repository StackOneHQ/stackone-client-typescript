# HrisDownloadEmployeeDocumentRequest

## Example Usage

```typescript
import { HrisDownloadEmployeeDocumentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisDownloadEmployeeDocumentRequest = {
  format: "base64",
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `format`                           | *string*                           | :heavy_minus_sign:                 | The format to download the file in | base64                             |
| `id`                               | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `subResourceId`                    | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `xAccountId`                       | *string*                           | :heavy_check_mark:                 | The account identifier             |                                    |