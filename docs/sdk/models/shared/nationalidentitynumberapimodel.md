# NationalIdentityNumberApiModel

## Example Usage

```typescript
import {
  NationalIdentityNumberApiModel,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NationalIdentityNumberApiModel = {
  country: {
    value: NationalIdentityNumberApiModelValue.Us,
  },
  type: {
    value: NationalIdentityNumberApiModelSchemasValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                           | [shared.NationalIdentityNumberApiModelCountry](../../../sdk/models/shared/nationalidentitynumberapimodelcountry.md) | :heavy_minus_sign:                                                                                                  | The country code                                                                                                    |                                                                                                                     |
| `type`                                                                                                              | [shared.NationalIdentityNumberApiModelType](../../../sdk/models/shared/nationalidentitynumberapimodeltype.md)       | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `value`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 | 123456789                                                                                                           |