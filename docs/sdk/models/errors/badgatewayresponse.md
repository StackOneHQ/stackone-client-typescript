# BadGatewayResponse

## Example Usage

```typescript
import { BadGatewayResponse } from "@stackone/stackone-client-ts/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Error message                                                                                 | Bad Gateway                                                                                   |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP status code                                                                              | 502                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the error occurred                                                             | 2023-05-30T00:00:00.000Z                                                                      |