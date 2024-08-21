# CountryCodeEnum

## Example Usage

```typescript
import { CountryCodeEnum, CountryCodeEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CountryCodeEnum = {
    value: CountryCodeEnumValue.Us,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.CountryCodeEnumSourceValue*                                               | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `value`                                                                           | [shared.CountryCodeEnumValue](../../../sdk/models/shared/countrycodeenumvalue.md) | :heavy_minus_sign:                                                                | The ISO3166-1 Alpha2 Code of the Country                                          | US                                                                                |