# AccountingJournalValue

The journal status

## Example Usage

```typescript
import { AccountingJournalValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalValue = AccountingJournalValue.Draft;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Posted`               | posted                 |
| `Void`                 | void                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |