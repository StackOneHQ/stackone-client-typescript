# EmployeeSchemasCountry

The country code

## Example Usage

```typescript
import { EmployeeSchemasCountry, EmployeeSchemasNationalIdentityNumberValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeSchemasCountry = {
  value: EmployeeSchemasNationalIdentityNumberValue.Us,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                 | *shared.EmployeeSchemasNationalIdentityNumberSourceValue*                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `value`                                                                                                                       | [shared.EmployeeSchemasNationalIdentityNumberValue](../../../sdk/models/shared/employeeschemasnationalidentitynumbervalue.md) | :heavy_minus_sign:                                                                                                            | The ISO3166-1 Alpha2 Code of the Country                                                                                      | US                                                                                                                            |