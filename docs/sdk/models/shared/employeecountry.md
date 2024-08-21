# EmployeeCountry

The country code

## Example Usage

```typescript
import { EmployeeCountry, EmployeeSchemasHomeLocationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeCountry = {
    value: EmployeeSchemasHomeLocationValue.Us,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                             | *shared.EmployeeSchemasHomeLocationSourceValue*                                                           | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `value`                                                                                                   | [shared.EmployeeSchemasHomeLocationValue](../../../sdk/models/shared/employeeschemashomelocationvalue.md) | :heavy_minus_sign:                                                                                        | The ISO3166-1 Alpha2 Code of the Country                                                                  | US                                                                                                        |