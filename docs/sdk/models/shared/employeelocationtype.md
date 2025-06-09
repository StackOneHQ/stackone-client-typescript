# EmployeeLocationType

The location type

## Example Usage

```typescript
import { EmployeeLocationType, EmployeeSchemasHomeLocationLocationTypeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeLocationType = {
  sourceValue: "Home",
  value: EmployeeSchemasHomeLocationLocationTypeValue.Home,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                     | *shared.EmployeeSchemasHomeLocationLocationTypeSourceValue*                                                                       | :heavy_minus_sign:                                                                                                                | The source value of the location type.                                                                                            | Home                                                                                                                              |
| `value`                                                                                                                           | [shared.EmployeeSchemasHomeLocationLocationTypeValue](../../../sdk/models/shared/employeeschemashomelocationlocationtypevalue.md) | :heavy_minus_sign:                                                                                                                | The type of the location.                                                                                                         | home                                                                                                                              |