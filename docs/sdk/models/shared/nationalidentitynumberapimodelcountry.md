# NationalIdentityNumberApiModelCountry

The country code

## Example Usage

```typescript
import { NationalIdentityNumberApiModelCountry, NationalIdentityNumberApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NationalIdentityNumberApiModelCountry = {
  value: NationalIdentityNumberApiModelValue.Us,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.NationalIdentityNumberApiModelSourceValue*                                                              | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `value`                                                                                                         | [shared.NationalIdentityNumberApiModelValue](../../../sdk/models/shared/nationalidentitynumberapimodelvalue.md) | :heavy_minus_sign:                                                                                              | The ISO3166-1 Alpha2 Code of the Country                                                                        | US                                                                                                              |