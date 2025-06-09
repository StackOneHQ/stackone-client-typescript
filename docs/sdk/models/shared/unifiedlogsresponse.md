# UnifiedLogsResponse

The advanced log response data

## Example Usage

```typescript
import { UnifiedLogsResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogsResponse = {
  customMappingErrors: null,
  headers: {
    "content-type": "application/json",
    "authorization": "Bearer token",
  },
  providerErrors: [
    {
      headers: {},
      raw: {},
      status: 400,
      url: "https://api.provider.com/v1/resource",
    },
  ],
  statusCode: 200,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `body`                                                                          | *any*                                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `customMappingErrors`                                                           | [shared.CustomMappingError](../../../sdk/models/shared/custommappingerror.md)[] | :heavy_minus_sign:                                                              | The custom mapping errors                                                       |                                                                                 |
| `headers`                                                                       | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             | {<br/>"content-type": "application/json",<br/>"authorization": "Bearer token"<br/>} |
| `providerErrors`                                                                | [shared.ProviderError](../../../sdk/models/shared/providererror.md)[]           | :heavy_minus_sign:                                                              | The provider errors                                                             |                                                                                 |
| `statusCode`                                                                    | *number*                                                                        | :heavy_minus_sign:                                                              | The response status code                                                        | 200                                                                             |