# AccountingTaxRateResultData

## Example Usage

```typescript
import { AccountingTaxRateResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingTaxRateResultData = {
  active: true,
  code: "TAX001",
  companyId: "company_123",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "VAT 7.5%",
  percentage: 7.5,
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `active`                                   | *shared.AccountingTaxRateResultActive*     | :heavy_minus_sign:                         | Whether the tax rate is active             | true                                       |
| `code`                                     | *string*                                   | :heavy_minus_sign:                         | External system's tax code                 | TAX001                                     |
| `companyId`                                | *string*                                   | :heavy_minus_sign:                         | ID of the company this tax rate belongs to | company_123                                |
| `id`                                       | *string*                                   | :heavy_minus_sign:                         | Unique identifier                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3       |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Name of the tax rate                       | VAT 7.5%                                   |
| `percentage`                               | *number*                                   | :heavy_minus_sign:                         | Tax rate percentage                        | 7.5                                        |
| `remoteId`                                 | *string*                                   | :heavy_minus_sign:                         | Provider's unique identifier               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3       |