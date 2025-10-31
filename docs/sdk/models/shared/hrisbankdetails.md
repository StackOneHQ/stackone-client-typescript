# HRISBankDetails

## Example Usage

```typescript
import { HRISBankDetails, HRISBankDetailsSchemasCurrencyCodeValue, HRISBankDetailsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBankDetails = {
  accountName: "John Doe Primary Account",
  accountType: {
    sourceValue: "checking",
    value: HRISBankDetailsValue.Checking,
  },
  bankName: "Chase Bank",
  clearingCodes: [
    {
      type: null,
      value: "12-34-56",
    },
  ],
  countryCode: null,
  currencyCode: {
    sourceValue: "USD",
    value: HRISBankDetailsSchemasCurrencyCodeValue.Usd,
  },
  iban: "GB82WEST12345698765432",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  isPrimary: true,
  localAccountNumber: "1234567890",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  swiftBic: "CHASUS33",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountName`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the bank account                                                                    | John Doe Primary Account                                                                        |
| `accountType`                                                                                   | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                                 | :heavy_minus_sign:                                                                              | The type of bank account                                                                        |                                                                                                 |
| `bankName`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the bank                                                                            | Chase Bank                                                                                      |
| `clearingCodes`                                                                                 | [shared.ClearingCode](../../../sdk/models/shared/clearingcode.md)[]                             | :heavy_minus_sign:                                                                              | Array of clearing codes required by the country                                                 |                                                                                                 |
| `countryCode`                                                                                   | [shared.CountryCode](../../../sdk/models/shared/countrycode.md)                                 | :heavy_minus_sign:                                                                              | The country code where the bank is located                                                      |                                                                                                 |
| `currencyCode`                                                                                  | [shared.HRISBankDetailsCurrencyCode](../../../sdk/models/shared/hrisbankdetailscurrencycode.md) | :heavy_minus_sign:                                                                              | The currency code for the account                                                               |                                                                                                 |
| `iban`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | International Bank Account Number (IBAN)                                                        | GB82WEST12345698765432                                                                          |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `isPrimary`                                                                                     | *shared.IsPrimary*                                                                              | :heavy_minus_sign:                                                                              | Whether this is the primary bank account                                                        | true                                                                                            |
| `localAccountNumber`                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Local account number (used when IBAN is not available)                                          | 1234567890                                                                                      |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `swiftBic`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | SWIFT/BIC code for international transfers                                                      | CHASUS33                                                                                        |