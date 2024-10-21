# HrisCreateEmployeeRequestDtoNationalIdentityNumber

The national identity number

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoNationalIdentityNumber,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoNationalIdentityNumber = {
  country: {
    value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Us,
  },
  type: {
    value:
      HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                     | [shared.HrisCreateEmployeeRequestDtoSchemasCountry](../../../sdk/models/shared/hriscreateemployeerequestdtoschemascountry.md) | :heavy_minus_sign:                                                                                                            | The country code                                                                                                              |                                                                                                                               |
| `type`                                                                                                                        | [shared.HrisCreateEmployeeRequestDtoType](../../../sdk/models/shared/hriscreateemployeerequestdtotype.md)                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `value`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 123456789                                                                                                                     |