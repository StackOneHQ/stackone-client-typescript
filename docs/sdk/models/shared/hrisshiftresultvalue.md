# HrisShiftResultValue

The approval status of the shift

## Example Usage

```typescript
import { HrisShiftResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftResultValue = HrisShiftResultValue.Approved;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `Approved`             | approved               |
| `Rejected`             | rejected               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |