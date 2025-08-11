# AccountingAccountsPaginated

## Example Usage

```typescript
import { AccountingAccountsPaginated, AccountingAccountValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingAccountsPaginated = {
  data: [
    {
      active: true,
      code: "4000",
      companyId: "company_123",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Cash",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        sourceValue: "asset",
        value: AccountingAccountValue.Asset,
      },
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.AccountingAccount](../../../sdk/models/shared/accountingaccount.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |
| `next`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `raw`                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]             | :heavy_minus_sign:                                                            | N/A                                                                           |