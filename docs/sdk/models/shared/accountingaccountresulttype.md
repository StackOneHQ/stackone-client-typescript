# AccountingAccountResultType

Type of account

## Example Usage

```typescript
import { AccountingAccountResultType, AccountingAccountResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingAccountResultType = {
  sourceValue: "asset",
  value: AccountingAccountResultValue.Asset,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.AccountingAccountResultSourceValue*                                                       | :heavy_minus_sign:                                                                                | N/A                                                                                               | asset                                                                                             |
| `value`                                                                                           | [shared.AccountingAccountResultValue](../../../sdk/models/shared/accountingaccountresultvalue.md) | :heavy_minus_sign:                                                                                | Type of account                                                                                   | asset                                                                                             |