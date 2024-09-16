# NationalIdentityNumber

The national identity number

## Example Usage

```typescript
import { EmployeeSchemasNationalIdentityNumberValue, NationalIdentityNumber } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NationalIdentityNumber = {
  type: {
    value: EmployeeSchemasNationalIdentityNumberValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `type`                                                            | [shared.EmployeeType](../../../sdk/models/shared/employeetype.md) | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `value`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | 123456789                                                         |