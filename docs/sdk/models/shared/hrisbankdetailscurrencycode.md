# HRISBankDetailsCurrencyCode

The currency code for the account

## Example Usage

```typescript
import { HRISBankDetailsCurrencyCode, HRISBankDetailsSchemasCurrencyCodeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBankDetailsCurrencyCode = {
  sourceValue: "USD",
  value: HRISBankDetailsSchemasCurrencyCodeValue.Usd,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                           | *shared.HRISBankDetailsSchemasCurrencyCodeSourceValue*                                                                  | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | USD                                                                                                                     |
| `value`                                                                                                                 | [shared.HRISBankDetailsSchemasCurrencyCodeValue](../../../sdk/models/shared/hrisbankdetailsschemascurrencycodevalue.md) | :heavy_minus_sign:                                                                                                      | ISO 4217 currency code                                                                                                  | USD                                                                                                                     |