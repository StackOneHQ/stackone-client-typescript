# LinkedAccountsPaginated

## Example Usage

```typescript
import { LinkedAccountsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LinkedAccountsPaginated = {
  data: [],
  page: 8054.83,
  pageSize: 5654.61,
  total: 7410.81,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.LinkedAccount](../../../sdk/models/shared/linkedaccount.md)[] | :heavy_check_mark:                                                    | The accounts on this page.                                            |
| `page`                                                                | *number*                                                              | :heavy_check_mark:                                                    | The current page number.                                              |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | The number of accounts per page.                                      |
| `total`                                                               | *number*                                                              | :heavy_check_mark:                                                    | The total number of accounts matching the request.                    |