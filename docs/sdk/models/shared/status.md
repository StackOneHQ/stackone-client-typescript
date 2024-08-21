# Status

The status of the candidates assessment.

## Example Usage

```typescript
import { Status } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Status = Status.Completed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `InProgress`           | in_progress            |
| `Pending`              | pending                |
| `Completed`            | completed              |
| `Rejected`             | rejected               |
| `Expired`              | expired                |
| -                      | `Unrecognized<string>` |