# AtsJobValue

The status of the job.

## Example Usage

```typescript
import { AtsJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsJobValue = AtsJobValue.Published;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Published`            | published              |
| `Draft`                | draft                  |
| `Pending`              | pending                |
| `Internal`             | internal               |
| `Archived`             | archived               |
| `Closed`               | closed                 |
| `Open`                 | open                   |
| `Deleted`              | deleted                |
| `OnHold`               | on_hold                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |