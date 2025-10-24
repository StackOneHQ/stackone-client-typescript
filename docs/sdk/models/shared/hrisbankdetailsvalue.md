# HRISBankDetailsValue

The type of bank account

## Example Usage

```typescript
import { HRISBankDetailsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBankDetailsValue = HRISBankDetailsValue.Checking;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Savings`              | savings                |
| `Checking`             | checking               |
| `Current`              | current                |
| `Business`             | business               |
| `Personal`             | personal               |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |