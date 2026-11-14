# AccountingAccountValue

Type of account

## Example Usage

```typescript
import { AccountingAccountValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingAccountValue = AccountingAccountValue.Asset;

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