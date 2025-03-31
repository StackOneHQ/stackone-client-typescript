# TimeOffValue

## Example Usage

```typescript
import { TimeOffValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffValue = TimeOffValue.Approved;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Approved`             | approved               |
| `Cancelled`            | cancelled              |
| `Rejected`             | rejected               |
| `Pending`              | pending                |
| `Deleted`              | deleted                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |