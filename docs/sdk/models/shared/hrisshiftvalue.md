# HrisShiftValue

The approval status of the shift

## Example Usage

```typescript
import { HrisShiftValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftValue = HrisShiftValue.Approved;

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