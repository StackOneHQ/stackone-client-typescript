# ~~HrisUpdateEmployeeRequestDtoNationalIdentityNumber~~

The national identity number

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoNationalIdentityNumber,
  HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue,
  HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoNationalIdentityNumber = {
  country: {
    value: HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Us,
  },
  type: {
    value:
      HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                     | [shared.HrisUpdateEmployeeRequestDtoSchemasCountry](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemascountry.md) | :heavy_minus_sign:                                                                                                            | The country code                                                                                                              |                                                                                                                               |
| `type`                                                                                                                        | [shared.HrisUpdateEmployeeRequestDtoType](../../../sdk/models/shared/hrisupdateemployeerequestdtotype.md)                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `value`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 123456789                                                                                                                     |