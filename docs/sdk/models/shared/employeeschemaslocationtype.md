# EmployeeSchemasLocationType

The location type

## Example Usage

```typescript
import { EmployeeSchemasLocationType, EmployeeSchemasWorkLocationLocationTypeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeSchemasLocationType = {
  sourceValue: [
    "Home",
  ],
  value: EmployeeSchemasWorkLocationLocationTypeValue.Home,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                     | *shared.EmployeeSchemasWorkLocationLocationTypeSourceValue*                                                                       | :heavy_minus_sign:                                                                                                                | The source value of the location type.                                                                                            | Home                                                                                                                              |
| `value`                                                                                                                           | [shared.EmployeeSchemasWorkLocationLocationTypeValue](../../../sdk/models/shared/employeeschemasworklocationlocationtypevalue.md) | :heavy_minus_sign:                                                                                                                | The type of the location.                                                                                                         | home                                                                                                                              |