# PreconditionFailedResponse

## Example Usage

```typescript
import { PreconditionFailedResponse } from "@stackone/stackone-client-ts/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `details`                                                                                     | [errors.Details](../../../sdk/models/errors/details.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `errorCode`                                                                                   | [errors.ErrorCode](../../../sdk/models/errors/errorcode.md)                                   | :heavy_check_mark:                                                                            | Identifies which account status blocked the request                                           | AccountSuspendedError                                                                         |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Error message                                                                                 | Account is suspended and cannot process requests                                              |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP status code                                                                              | 412                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the error occurred                                                             | 2023-05-30T00:00:00.000Z                                                                      |