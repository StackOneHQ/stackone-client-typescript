# Confidential

Confidential status of the job

## Example Usage

```typescript
import { Confidential } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Confidential = Confidential.True;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `True`                 | true                   |
| `False`                | false                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |