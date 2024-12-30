# HrisUpdateEmployeeRequestDtoSchemasCountry

The country code

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoSchemasCountry,
  HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoSchemasCountry = {
  value: HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Us,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                         | *shared.HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberSourceValue*                                                                                         | :heavy_minus_sign:                                                                                                                                                    | N/A                                                                                                                                                                   |                                                                                                                                                                       |
| `value`                                                                                                                                                               | [shared.HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasnationalidentitynumbervalue.md) | :heavy_minus_sign:                                                                                                                                                    | The ISO3166-1 Alpha2 Code of the Country                                                                                                                              | US                                                                                                                                                                    |