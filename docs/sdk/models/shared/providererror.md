# ProviderError

## Example Usage

```typescript
import { ProviderError } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ProviderError = {
  headers: {},
  raw: {},
  status: 400,
  url: "https://api.provider.com/v1/resource",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | [shared.Headers](../../../sdk/models/shared/headers.md)                                    | :heavy_minus_sign:                                                                         | Response headers                                                                           | {<br/>"content-type": "application/json",<br/>"x-request-id": "5678c28b211dace4e0a0f9171e6b88c5"<br/>} |
| `raw`                                                                                      | [shared.Raw](../../../sdk/models/shared/raw.md)                                            | :heavy_minus_sign:                                                                         | Raw error response from the provider                                                       | {<br/>"message": "Invalid input parameters"<br/>}                                          |
| `status`                                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | HTTP status code of the provider error                                                     | 400                                                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | URL that caused the error                                                                  | https://api.provider.com/v1/resource                                                       |