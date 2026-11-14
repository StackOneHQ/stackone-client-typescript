# JournalLineValue

Type of account

## Example Usage

```typescript
import { JournalLineValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JournalLineValue = JournalLineValue.Asset;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Asset`                | asset                  |
| `Liability`            | liability              |
| `Equity`               | equity                 |
| `Revenue`              | revenue                |
| `Expense`              | expense                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |