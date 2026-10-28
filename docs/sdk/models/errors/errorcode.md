# ErrorCode

Identifies which account status blocked the request

## Example Usage

```typescript
import { ErrorCode } from "@stackone/stackone-client-ts/sdk/models/errors";

let value: ErrorCode = ErrorCode.AccountSuspendedError;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `AccountSuspendedError` | AccountSuspendedError   |
| `AccountExpiredError`   | AccountExpiredError     |
| `AccountArchivedError`  | AccountArchivedError    |
| `AccountErrorStatus`    | AccountErrorStatus      |
| -                       | `Unrecognized<string>`  |