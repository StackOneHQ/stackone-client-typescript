# HrisShiftSchemasValue

The status of the shift

## Example Usage

```typescript
import { HrisShiftSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftSchemasValue = HrisShiftSchemasValue.Confirmed;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Published`            | published              |
| `Confirmed`            | confirmed              |
| `Cancelled`            | cancelled              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |