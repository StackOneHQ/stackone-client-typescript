# HRISLocationCountry

The country code

## Example Usage

```typescript
import { HRISLocationCountry, HRISLocationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISLocationCountry = {
    value: HRISLocationValue.Us,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.HRISLocationSourceValue*                                            | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |
| `value`                                                                     | [shared.HRISLocationValue](../../../sdk/models/shared/hrislocationvalue.md) | :heavy_minus_sign:                                                          | The ISO3166-1 Alpha2 Code of the Country                                    | US                                                                          |