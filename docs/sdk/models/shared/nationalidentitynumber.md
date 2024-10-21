# NationalIdentityNumber

The national identity number

## Example Usage

```typescript
import {
  EmployeeSchemasNationalIdentityNumberTypeValue,
  EmployeeSchemasNationalIdentityNumberValue,
  NationalIdentityNumber,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NationalIdentityNumber = {
  country: {
    value: EmployeeSchemasNationalIdentityNumberValue.Us,
  },
  type: {
    value: EmployeeSchemasNationalIdentityNumberTypeValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `country`                                                                             | [shared.EmployeeSchemasCountry](../../../sdk/models/shared/employeeschemascountry.md) | :heavy_minus_sign:                                                                    | The country code                                                                      |                                                                                       |
| `type`                                                                                | [shared.EmployeeType](../../../sdk/models/shared/employeetype.md)                     | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `value`                                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 123456789                                                                             |