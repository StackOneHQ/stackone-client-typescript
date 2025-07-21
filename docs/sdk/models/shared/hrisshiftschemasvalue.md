# HrisShiftSchemasValue

The status of the shift

## Example Usage

```typescript
import { HrisShiftSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftSchemasValue = HrisShiftSchemasValue.Confirmed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Published`            | published              |
| `Confirmed`            | confirmed              |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |