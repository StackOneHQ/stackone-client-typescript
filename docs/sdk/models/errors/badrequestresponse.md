# BadRequestResponse

## Example Usage

```typescript
import { BadRequestResponse } from "@stackone/stackone-client-ts/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [errors.Data](../../../sdk/models/errors/data.md)                                             | :heavy_minus_sign:                                                                            | Error details                                                                                 |                                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Error message                                                                                 | Bad Request                                                                                   |
| `providerErrors`                                                                              | [shared.ProviderError](../../../sdk/models/shared/providererror.md)[]                         | :heavy_minus_sign:                                                                            | List of provider-specific errors                                                              |                                                                                               |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP status code                                                                              | 400                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the error occurred                                                             | 2023-05-30T00:00:00.000Z                                                                      |