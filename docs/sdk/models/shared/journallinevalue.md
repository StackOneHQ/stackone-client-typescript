# JournalLineValue

Type of account

## Example Usage

```typescript
import { JournalLineValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JournalLineValue = JournalLineValue.Asset;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Asset`                | asset                  |
| `Liability`            | liability              |
| `Equity`               | equity                 |
| `Revenue`              | revenue                |
| `Expense`              | expense                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |