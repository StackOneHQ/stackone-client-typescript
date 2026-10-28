# Effect

What it did, absent when it did nothing. Most rules on a call are absent here: they were in force and had no opinion, which is the distinction this record exists to make.

## Example Usage

```typescript
import { Effect } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Effect = Effect.Refused;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Refused`              | refused                |
| `Masked`               | masked                 |
| `Redacted`             | redacted               |
| `WouldHaveRefused`     | would-have-refused     |
| `WouldHaveMasked`      | would-have-masked      |
| `Permitted`            | permitted              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |