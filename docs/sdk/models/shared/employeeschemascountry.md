# EmployeeSchemasCountry

The country code

## Example Usage

```typescript
import { EmployeeSchemasCountry, EmployeeSchemasWorkLocationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeSchemasCountry = {
  value: EmployeeSchemasWorkLocationValue.Us,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                             | *shared.EmployeeSchemasWorkLocationSourceValue*                                                           | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `value`                                                                                                   | [shared.EmployeeSchemasWorkLocationValue](../../../sdk/models/shared/employeeschemasworklocationvalue.md) | :heavy_minus_sign:                                                                                        | The ISO3166-1 Alpha2 Code of the Country                                                                  | US                                                                                                        |