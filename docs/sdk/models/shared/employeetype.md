# EmployeeType

## Example Usage

```typescript
import { EmployeeSchemasNationalIdentityNumberValue, EmployeeType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeeType = {
  value: EmployeeSchemasNationalIdentityNumberValue.Ssn,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                 | *shared.EmployeeSchemasNationalIdentityNumberSourceValue*                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `value`                                                                                                                       | [shared.EmployeeSchemasNationalIdentityNumberValue](../../../sdk/models/shared/employeeschemasnationalidentitynumbervalue.md) | :heavy_minus_sign:                                                                                                            | The type of the national identity number                                                                                      | ssn                                                                                                                           |