# HrisShiftResultValue

The approval status of the shift

## Example Usage

```typescript
import { HrisShiftResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftResultValue = HrisShiftResultValue.Approved;
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