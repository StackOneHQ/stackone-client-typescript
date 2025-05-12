# JobConfidential

Confidential status of the job

## Example Usage

```typescript
import { JobConfidential } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobConfidential = JobConfidential.True;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `True`                 | true                   |
| `False`                | false                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |