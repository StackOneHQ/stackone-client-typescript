# AccountingJournalCreateRequestDto

## Example Usage

```typescript
import { AccountingJournalCreateRequestDto, AccountingJournalCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalCreateRequestDto = {
  currencyCode: {
    sourceValue: "USD",
    value: AccountingJournalCreateRequestDtoValue.Usd,
  },
  exchangeRate: 1,
  lines: [
    {
      accountId: "acc_123456789",
      amount: 10010,
      description: "Payment for office supplies",
      taxAmount: 10010,
      taxRateId: "tax_123456789",
    },
  ],
  memo: "Monthly closing entries",
  reference: "JRN-2024-001",
  transactionDate: new Date("2024-03-20T10:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currencyCode`                                                                                | [shared.CurrencyCode](../../../sdk/models/shared/currencycode.md)                             | :heavy_minus_sign:                                                                            | Currency code for the journal and all lines                                                   |                                                                                               |
| `exchangeRate`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Exchange rate to company base currency to apply to all lines                                  | 1                                                                                             |
| `lines`                                                                                       | [shared.CreateJournalLine](../../../sdk/models/shared/createjournalline.md)[]                 | :heavy_minus_sign:                                                                            | List of journal lines                                                                         |                                                                                               |
| `memo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Memo or description for the journal                                                           | Monthly closing entries                                                                       |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference number for the journal                                                              | JRN-2024-001                                                                                  |
| `transactionDate`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of the journal transaction                                                               | 2024-03-20T10:00:00Z                                                                          |