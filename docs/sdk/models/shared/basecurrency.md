# BaseCurrency

Default currency for the company

## Example Usage

```typescript
import { AccountingCompanyValue, BaseCurrency } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BaseCurrency = {
  sourceValue: "USD",
  value: AccountingCompanyValue.Usd,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.AccountingCompanySourceValue*                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   | USD                                                                                   |
| `value`                                                                               | [shared.AccountingCompanyValue](../../../sdk/models/shared/accountingcompanyvalue.md) | :heavy_minus_sign:                                                                    | Default currency for the company                                                      | USD                                                                                   |