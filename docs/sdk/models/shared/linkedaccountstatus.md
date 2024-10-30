# LinkedAccountStatus

## Example Usage

```typescript
import { LinkedAccountStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LinkedAccountStatus = LinkedAccountStatus.Inactive;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Inactive`             | inactive               |
| `Error`                | error                  |
| -                      | `Unrecognized<string>` |