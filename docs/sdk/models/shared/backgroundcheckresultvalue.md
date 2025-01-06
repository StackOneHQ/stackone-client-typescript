# BackgroundCheckResultValue

The result of the test.

## Example Usage

```typescript
import { BackgroundCheckResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckResultValue = BackgroundCheckResultValue.Passed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Cancelled`            | cancelled              |
| `Expired`              | expired                |
| `Failed`               | failed                 |
| `Passed`               | passed                 |
| -                      | `Unrecognized<string>` |