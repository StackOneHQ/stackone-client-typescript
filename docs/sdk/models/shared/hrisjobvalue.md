# HrisJobValue

The status of the job.

## Example Usage

```typescript
import { HrisJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisJobValue = HrisJobValue.Open;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Pending`              | pending                |
| `Archived`             | archived               |
| `Closed`               | closed                 |
| `Open`                 | open                   |
| `Deleted`              | deleted                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |