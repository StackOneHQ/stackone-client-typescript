# Type

Type of account

## Example Usage

```typescript
import { AccountingAccountValue, Type } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Type = {
  sourceValue: "asset",
  value: AccountingAccountValue.Asset,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.AccountingAccountSourceValue*                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   | asset                                                                                 |
| `value`                                                                               | [shared.AccountingAccountValue](../../../sdk/models/shared/accountingaccountvalue.md) | :heavy_minus_sign:                                                                    | Type of account                                                                       | asset                                                                                 |