# Country

The country code

## Example Usage

```typescript
import { AccountAddressValue, Country } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Country = {
  sourceValue: "GB",
  value: AccountAddressValue.Gb,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sourceValue`                                                                   | *shared.AccountAddressSourceValue*                                              | :heavy_minus_sign:                                                              | The source value of the ISO 3166-1 alpha-2 code of the country.                 | GB                                                                              |
| `value`                                                                         | [shared.AccountAddressValue](../../../sdk/models/shared/accountaddressvalue.md) | :heavy_minus_sign:                                                              | The ISO 3166-1 alpha-2 code of the country.                                     | GB                                                                              |