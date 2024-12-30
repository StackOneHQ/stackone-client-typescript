# HrisUpdateEmployeeRequestDtoCountry

The country code

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoCountry,
  HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoCountry = {
  value: HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue.Us,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                     | *shared.HrisUpdateEmployeeRequestDtoSchemasHomeLocationSourceValue*                                                                               | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `value`                                                                                                                                           | [shared.HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemashomelocationvalue.md) | :heavy_minus_sign:                                                                                                                                | The ISO3166-1 Alpha2 Code of the Country                                                                                                          | US                                                                                                                                                |