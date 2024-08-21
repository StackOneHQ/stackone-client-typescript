# HrisCreateEmployeeRequestDtoCountry

The country code

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoCountry,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoCountry = {
    value: HrisCreateEmployeeRequestDtoSchemasHomeLocationValue.Us,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                     | *shared.HrisCreateEmployeeRequestDtoSchemasHomeLocationSourceValue*                                                                               | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `value`                                                                                                                                           | [shared.HrisCreateEmployeeRequestDtoSchemasHomeLocationValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemashomelocationvalue.md) | :heavy_minus_sign:                                                                                                                                | The ISO3166-1 Alpha2 Code of the Country                                                                                                          | US                                                                                                                                                |