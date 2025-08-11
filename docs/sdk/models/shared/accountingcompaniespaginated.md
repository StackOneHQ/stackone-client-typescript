# AccountingCompaniesPaginated

## Example Usage

```typescript
import { AccountingCompaniesPaginated, AccountingCompanyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingCompaniesPaginated = {
  data: [
    {
      baseCurrency: {
        sourceValue: "USD",
        value: AccountingCompanyValue.Usd,
      },
      fiscalYearStartDay: 1,
      fiscalYearStartMonth: 1,
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Acme Corp",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.AccountingCompany](../../../sdk/models/shared/accountingcompany.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |
| `next`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `raw`                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]             | :heavy_minus_sign:                                                            | N/A                                                                           |