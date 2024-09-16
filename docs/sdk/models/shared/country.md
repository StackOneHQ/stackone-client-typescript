# Country

The country code

## Example Usage

```typescript
import { AccountAddressSchemasValue, Country } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Country = {
  sourceValue: "GB",
  value: AccountAddressSchemasValue.Gb,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.AccountAddressSchemasSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the ISO 3166-1 alpha-2 code of the country.                               | GB                                                                                            |
| `value`                                                                                       | [shared.AccountAddressSchemasValue](../../../sdk/models/shared/accountaddressschemasvalue.md) | :heavy_minus_sign:                                                                            | The ISO 3166-1 alpha-2 code of the country.                                                   | GB                                                                                            |