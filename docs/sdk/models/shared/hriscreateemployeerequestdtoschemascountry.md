# HrisCreateEmployeeRequestDtoSchemasCountry

The country code

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoSchemasCountry,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoSchemasCountry = {
  value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Us,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                         | *shared.HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberSourceValue*                                                                                         | :heavy_minus_sign:                                                                                                                                                    | N/A                                                                                                                                                                   |                                                                                                                                                                       |
| `value`                                                                                                                                                               | [shared.HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasnationalidentitynumbervalue.md) | :heavy_minus_sign:                                                                                                                                                    | The ISO3166-1 Alpha2 Code of the Country                                                                                                                              | US                                                                                                                                                                    |