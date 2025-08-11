# AccountingCompany

## Example Usage

```typescript
import { AccountingCompany, AccountingCompanyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingCompany = {
  baseCurrency: {
    sourceValue: "USD",
    value: AccountingCompanyValue.Usd,
  },
  fiscalYearStartDay: 1,
  fiscalYearStartMonth: 1,
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Acme Corp",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `baseCurrency`                                                    | [shared.BaseCurrency](../../../sdk/models/shared/basecurrency.md) | :heavy_minus_sign:                                                | Default currency for the company                                  |                                                                   |
| `fiscalYearStartDay`                                              | *number*                                                          | :heavy_minus_sign:                                                | Fiscal year start day (1-31)                                      | 1                                                                 |
| `fiscalYearStartMonth`                                            | *number*                                                          | :heavy_minus_sign:                                                | Fiscal year start month (1-12)                                    | 1                                                                 |
| `id`                                                              | *string*                                                          | :heavy_minus_sign:                                                | Unique identifier                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                              |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | Name of the company                                               | Acme Corp                                                         |
| `remoteId`                                                        | *string*                                                          | :heavy_minus_sign:                                                | Provider's unique identifier                                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                              |