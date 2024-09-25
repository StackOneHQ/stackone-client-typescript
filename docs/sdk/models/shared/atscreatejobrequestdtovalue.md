# AtsCreateJobRequestDtoValue

The status of the job.

## Example Usage

```typescript
import { AtsCreateJobRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateJobRequestDtoValue = AtsCreateJobRequestDtoValue.Published;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |