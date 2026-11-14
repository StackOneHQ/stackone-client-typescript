# ConnectorProfilesPaginated

## Example Usage

```typescript
import { ConnectorProfilesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectorProfilesPaginated = {
  data: [],
  page: 8117.3,
  pageSize: 4153.48,
  total: 1693.35,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.ConnectorProfile](../../../sdk/models/shared/connectorprofile.md)[] | :heavy_check_mark:                                                          | The list of connector profiles                                              |
| `page`                                                                      | *number*                                                                    | :heavy_check_mark:                                                          | The current page number                                                     |
| `pageSize`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | The number of results per page                                              |
| `total`                                                                     | *number*                                                                    | :heavy_check_mark:                                                          | The total number of connector profiles matching the query                   |