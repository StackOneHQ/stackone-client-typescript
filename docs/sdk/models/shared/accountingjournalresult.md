# AccountingJournalResult

## Example Usage

```typescript
import { AccountingJournalResult, AccountingJournalResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalResult = {
  data: {
    companyId: "comp_123456789",
    createdAt: new Date("2024-03-20T10:00:00Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    lines: [
      {
        accountId: "acc_123",
        amount: 10010,
        description: "Payment for office supplies",
        id: "line_1",
        taxAmount: 2002,
      },
    ],
    memo: "Monthly closing entries",
    postedAt: new Date("2024-03-20T10:00:00Z"),
    reference: "JRN-2024-001",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    status: {
      sourceValue: "draft",
      value: AccountingJournalResultValue.Draft,
    },
    transactionDate: new Date("2024-03-20T10:00:00Z"),
    updatedAt: new Date("2024-03-20T10:00:00Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.AccountingJournalResultData](../../../sdk/models/shared/accountingjournalresultdata.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `raw`                                                                                           | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                               | :heavy_minus_sign:                                                                              | N/A                                                                                             |