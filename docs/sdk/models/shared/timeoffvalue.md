# TimeOffValue

## Example Usage

```typescript
import { TimeOffValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffValue = TimeOffValue.Deleted;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Approved`             | approved               |
| `Cancelled`            | cancelled              |
| `Rejected`             | rejected               |
| `Pending`              | pending                |
| `Deleted`              | deleted                |
| `Draft`                | draft                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |