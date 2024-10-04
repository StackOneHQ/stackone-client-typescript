# EmployeeEmploymentType

The employee employment type

## Example Usage

```typescript
import { EmployeeEmploymentType, EmployeeSchemasEmploymentTypeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeEmploymentType = {
  sourceValue: "Permanent",
  value: EmployeeSchemasEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.EmployeeSchemasEmploymentTypeSourceValue*                                                             | :heavy_minus_sign:                                                                                            | The source value of the employment type.                                                                      | Permanent                                                                                                     |
| `value`                                                                                                       | [shared.EmployeeSchemasEmploymentTypeValue](../../../sdk/models/shared/employeeschemasemploymenttypevalue.md) | :heavy_minus_sign:                                                                                            | The type of the employment.                                                                                   | permanent                                                                                                     |