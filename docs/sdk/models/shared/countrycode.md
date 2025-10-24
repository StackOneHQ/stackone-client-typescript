# CountryCode

The country code where the bank is located

## Example Usage

```typescript
import { CountryCode, HRISBankDetailsSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CountryCode = {
  value: HRISBankDetailsSchemasValue.Us,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                   | *shared.HRISBankDetailsSchemasSourceValue*                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `value`                                                                                         | [shared.HRISBankDetailsSchemasValue](../../../sdk/models/shared/hrisbankdetailsschemasvalue.md) | :heavy_minus_sign:                                                                              | The ISO3166-1 Alpha2 Code of the Country                                                        | US                                                                                              |