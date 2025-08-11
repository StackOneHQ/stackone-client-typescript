# JournalLine

## Example Usage

```typescript
import { JournalLine, JournalLineSchemasValue, JournalLineValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JournalLine = {
  accountId: "acc_123456789",
  accountType: {
    sourceValue: "asset",
    value: JournalLineValue.Asset,
  },
  amount: 10010,
  currencyCode: {
    sourceValue: "USD",
    value: JournalLineSchemasValue.Usd,
  },
  description: "Payment for office supplies",
  exchangeRate: 1,
  id: "line_123456789",
  taxAmount: 2002,
  taxRatePercentage: 15,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | ID of the ledger account this line references                                                                 | acc_123456789                                                                                                 |
| `accountType`                                                                                                 | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                                               | :heavy_minus_sign:                                                                                            | Type of the account                                                                                           |                                                                                                               |
| `amount`                                                                                                      | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Amount of the journal line in minor units, e.g. 10010 for 100.10 USD. Positive for debit, negative for credit | 10010                                                                                                         |
| `currencyCode`                                                                                                | [shared.JournalLineCurrencyCode](../../../sdk/models/shared/journallinecurrencycode.md)                       | :heavy_minus_sign:                                                                                            | Currency code for this line                                                                                   |                                                                                                               |
| `description`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Description of the journal line                                                                               | Payment for office supplies                                                                                   |
| `exchangeRate`                                                                                                | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Exchange rate to company base currency                                                                        | 1                                                                                                             |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Unique identifier for the journal line                                                                        | line_123456789                                                                                                |
| `taxAmount`                                                                                                   | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Tax amount of the line in minor units, e.g. 10010 for 100.10 USD                                              | 2002                                                                                                          |
| `taxRatePercentage`                                                                                           | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Tax rate percentage                                                                                           | 15                                                                                                            |