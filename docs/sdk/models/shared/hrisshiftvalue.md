# HrisShiftValue

The approval status of the shift

## Example Usage

```typescript
import { HrisShiftValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftValue = HrisShiftValue.Approved;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `Approved`             | approved               |
| `Rejected`             | rejected               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |