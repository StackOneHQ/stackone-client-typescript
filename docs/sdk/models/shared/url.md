# Url

The request URL data

## Example Usage

```typescript
import { Url } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Url = {
  hostname: "example.com",
  path: "/api/v1/resource",
  queryParams: {
    "page": 1,
    "limit": 10,
  },
  url: "https://example.com/api/v1/resource",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `hostname`                          | *string*                            | :heavy_minus_sign:                  | The request URL hostname            | example.com                         |
| `path`                              | *string*                            | :heavy_minus_sign:                  | The request path                    | /api/v1/resource                    |
| `queryParams`                       | Record<string, *any*>               | :heavy_minus_sign:                  | The request query parameters        | {<br/>"page": 1,<br/>"limit": 10<br/>} |
| `url`                               | *string*                            | :heavy_minus_sign:                  | The request URL                     | https://example.com/api/v1/resource |