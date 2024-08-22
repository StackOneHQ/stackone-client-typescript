# EmploymentType

The employee employment type

## Example Usage

```typescript
import { EmployeeSchemasEmploymentTypeValue, EmploymentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentType = {
    sourceValue: Permanent,
    value: EmployeeSchemasEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.EmployeeSchemasEmploymentTypeSourceValue*                                                             | :heavy_minus_sign:                                                                                            | The source value of the employment type.                                                                      | Permanent                                                                                                     |
| `value`                                                                                                       | [shared.EmployeeSchemasEmploymentTypeValue](../../../sdk/models/shared/employeeschemasemploymenttypevalue.md) | :heavy_minus_sign:                                                                                            | The type of the employment.                                                                                   | permanent                                                                                                     |