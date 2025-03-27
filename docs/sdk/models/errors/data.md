# Data

Error details

## Example Usage

```typescript
import { Data } from "@stackone/stackone-client-ts/sdk/models/errors";

let value: Data = {
  headers: {},
  message: "Bad Request",
  statusCode: 400,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | [errors.Headers](../../../sdk/models/errors/headers.md)                                    | :heavy_minus_sign:                                                                         | Response headers                                                                           | {<br/>"content-type": "application/json",<br/>"x-request-id": "5678c28b211dace4e0a0f9171e6b88c5"<br/>} |
| `message`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Error message                                                                              | Bad Request                                                                                |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | HTTP status code                                                                           | 400                                                                                        |