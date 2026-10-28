# AuthConfigsPaginated

## Example Usage

```typescript
import { AuthConfigsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AuthConfigsPaginated = {
  data: [],
  page: 2731.77,
  pageSize: 4661.9,
  total: 9434.42,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.AuthConfig](../../../sdk/models/shared/authconfig.md)[] | :heavy_check_mark:                                              | The list of auth configs                                        |
| `page`                                                          | *number*                                                        | :heavy_check_mark:                                              | The current page number                                         |
| `pageSize`                                                      | *number*                                                        | :heavy_check_mark:                                              | The number of results per page                                  |
| `total`                                                         | *number*                                                        | :heavy_check_mark:                                              | The total number of auth configs matching the query             |