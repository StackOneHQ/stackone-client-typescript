# PositionValue

The status of the position.

## Example Usage

```typescript
import { PositionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PositionValue = PositionValue.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Open`                 | open                   |
| `Closed`               | closed                 |
| `Paused`               | paused                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |