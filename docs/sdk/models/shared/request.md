# Request

The advanced log request data

## Example Usage

```typescript
import { Request } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Request = {
  headers: {
    "content-type": "application/json",
    "authorization": "Bearer token",
  },
  id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  method: "get",
  url: {
    hostname: "example.com",
    path: "/api/v1/resource",
    queryParams: {
      "page": 1,
      "limit": 10,
    },
    url: "https://example.com/api/v1/resource",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `body`                                                                  | *any*                                                                   | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `headers`                                                               | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | N/A                                                                     | {<br/>"content-type": "application/json",<br/>"authorization": "Bearer token"<br/>} |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The request ID                                                          | adbf752f-6457-4ddd-89b3-98ae2252b83b                                    |
| `method`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The request method                                                      | get                                                                     |
| `url`                                                                   | [shared.Url](../../../sdk/models/shared/url.md)                         | :heavy_minus_sign:                                                      | The request URL data                                                    |                                                                         |