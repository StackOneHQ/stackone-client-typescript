# HrisCreateEmployeeRequestDtoSchemasCountry

The country code

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoSchemasCountry,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoSchemasCountry = {
    value: HrisCreateEmployeeRequestDtoSchemasWorkLocationValue.Us,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                     | *shared.HrisCreateEmployeeRequestDtoSchemasWorkLocationSourceValue*                                                                               | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `value`                                                                                                                                           | [shared.HrisCreateEmployeeRequestDtoSchemasWorkLocationValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasworklocationvalue.md) | :heavy_minus_sign:                                                                                                                                | The ISO3166-1 Alpha2 Code of the Country                                                                                                          | US                                                                                                                                                |