# PolicyLogResult

The outcome recorded for the call. `partial` means the call was permitted but a rule removed fields from the response; `monitored` means the call ran unchanged but a monitor-mode rule would have refused it, or would have removed fields from it (see `observed` and `observed_fields`); `error` means the layer could not decide and failed safe.

## Example Usage

```typescript
import { PolicyLogResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PolicyLogResult = PolicyLogResult.Partial;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Skipped`              | skipped                |
| `Allowed`              | allowed                |
| `Partial`              | partial                |
| `Monitored`            | monitored              |
| `Denied`               | denied                 |
| `Error`                | error                  |
| -                      | `Unrecognized<string>` |