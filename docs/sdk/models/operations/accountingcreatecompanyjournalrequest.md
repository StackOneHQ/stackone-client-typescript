# AccountingCreateCompanyJournalRequest

## Example Usage

```typescript
import { AccountingCreateCompanyJournalRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AccountingJournalCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingCreateCompanyJournalRequest = {
  accountingJournalCreateRequestDto: {
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `accountingJournalCreateRequestDto`                                                                         | [shared.AccountingJournalCreateRequestDto](../../../sdk/models/shared/accountingjournalcreaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |