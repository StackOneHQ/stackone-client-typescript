# PositionValue

The status of the position.

## Example Usage

```typescript
import { PositionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PositionValue = PositionValue.Open;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Open`                 | open                   |
| `Draft`                | draft                  |
| `Closed`               | closed                 |
| `Paused`               | paused                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |