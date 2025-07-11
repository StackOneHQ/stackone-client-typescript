# LinkedAccountMeta

## Example Usage

```typescript
import { LinkedAccountMeta, LinkedAccountMetaCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LinkedAccountMeta = {
  category: LinkedAccountMetaCategory.Iam,
  models: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  provider: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `category`                                                                                  | [shared.LinkedAccountMetaCategory](../../../sdk/models/shared/linkedaccountmetacategory.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `models`                                                                                    | Record<string, *any*>                                                                       | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `provider`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |