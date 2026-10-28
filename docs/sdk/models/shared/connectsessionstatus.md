# ConnectSessionStatus

## Example Usage

```typescript
import { ConnectSessionStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectSessionStatus = ConnectSessionStatus.Pending;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `Authenticated`        | authenticated          |
| `Error`                | error                  |
| `Cancelled`            | cancelled              |
| -                      | `Unrecognized<string>` |