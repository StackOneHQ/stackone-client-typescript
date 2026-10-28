# Status

The account status that blocked the request

## Example Usage

```typescript
import { Status } from "@stackone/stackone-client-ts/sdk/models/errors";

let value: Status = Status.Suspended;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Suspended`            | suspended              |
| `Expired`              | expired                |
| `Archived`             | archived               |
| `Error`                | error                  |
| -                      | `Unrecognized<string>` |