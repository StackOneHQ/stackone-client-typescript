# ~~UpdateEmployeeApiModelNationalIdentityNumber~~

The national identity number

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  UpdateEmployeeApiModelNationalIdentityNumber,
  UpdateEmployeeApiModelSchemasNationalIdentityNumberTypeValue,
  UpdateEmployeeApiModelSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateEmployeeApiModelNationalIdentityNumber = {
  country: {
    value: UpdateEmployeeApiModelSchemasNationalIdentityNumberValue.Us,
  },
  type: {
    value: UpdateEmployeeApiModelSchemasNationalIdentityNumberTypeValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                         | [shared.UpdateEmployeeApiModelSchemasCountry](../../../sdk/models/shared/updateemployeeapimodelschemascountry.md) | :heavy_minus_sign:                                                                                                | The country code                                                                                                  |                                                                                                                   |
| `type`                                                                                                            | [shared.UpdateEmployeeApiModelType](../../../sdk/models/shared/updateemployeeapimodeltype.md)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `value`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               | 123456789                                                                                                         |