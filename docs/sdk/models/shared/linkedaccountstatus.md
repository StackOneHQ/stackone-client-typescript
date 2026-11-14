# LinkedAccountStatus

## Example Usage

```typescript
import { LinkedAccountStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LinkedAccountStatus = LinkedAccountStatus.Expired;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Inactive`             | inactive               |
| `Suspended`            | suspended              |
| `Archived`             | archived               |
| `Expired`              | expired                |
| `Error`                | error                  |
| -                      | `Unrecognized<string>` |