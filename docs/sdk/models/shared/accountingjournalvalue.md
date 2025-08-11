# AccountingJournalValue

The journal status

## Example Usage

```typescript
import { AccountingJournalValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalValue = AccountingJournalValue.Draft;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Posted`               | posted                 |
| `Void`                 | void                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |