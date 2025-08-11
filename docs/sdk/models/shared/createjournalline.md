# CreateJournalLine

## Example Usage

```typescript
import { CreateJournalLine } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateJournalLine = {
  accountId: "acc_123456789",
  amount: 10010,
  description: "Payment for office supplies",
  taxAmount: 10010,
  taxRateId: "tax_123456789",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | ID of the ledger account this line references                                                                 | acc_123456789                                                                                                 |
| `amount`                                                                                                      | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Amount of the journal line in minor units, e.g. 10010 for 100.10 USD. Positive for debit, negative for credit | 10010                                                                                                         |
| `description`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Description of the journal line                                                                               | Payment for office supplies                                                                                   |
| `taxAmount`                                                                                                   | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Tax amount of the line in minor units, e.g. 10010 for 100.10 USD                                              | 10010                                                                                                         |
| `taxRateId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | ID of the tax rate applied                                                                                    | tax_123456789                                                                                                 |