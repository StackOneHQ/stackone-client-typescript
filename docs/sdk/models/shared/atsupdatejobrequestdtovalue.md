# AtsUpdateJobRequestDtoValue

The status of the job.

## Example Usage

```typescript
import { AtsUpdateJobRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateJobRequestDtoValue = AtsUpdateJobRequestDtoValue.Published;

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