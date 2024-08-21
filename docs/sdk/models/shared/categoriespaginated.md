# CategoriesPaginated

## Example Usage

```typescript
import { CategoriesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CategoriesPaginated = {
    data: [
        {
            active: true,
            id: "16873-IT345",
            name: "Information-Technology",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
    ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Category](../../../sdk/models/shared/category.md)[]       | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |