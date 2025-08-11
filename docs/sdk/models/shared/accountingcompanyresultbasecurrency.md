# AccountingCompanyResultBaseCurrency

Default currency for the company

## Example Usage

```typescript
import { AccountingCompanyResultBaseCurrency, AccountingCompanyResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingCompanyResultBaseCurrency = {
  sourceValue: "USD",
  value: AccountingCompanyResultValue.Usd,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.AccountingCompanyResultSourceValue*                                                       | :heavy_minus_sign:                                                                                | N/A                                                                                               | USD                                                                                               |
| `value`                                                                                           | [shared.AccountingCompanyResultValue](../../../sdk/models/shared/accountingcompanyresultvalue.md) | :heavy_minus_sign:                                                                                | Default currency for the company                                                                  | USD                                                                                               |