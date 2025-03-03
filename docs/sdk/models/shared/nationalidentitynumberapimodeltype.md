# NationalIdentityNumberApiModelType

## Example Usage

```typescript
import { NationalIdentityNumberApiModelSchemasValue, NationalIdentityNumberApiModelType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NationalIdentityNumberApiModelType = {
  value: NationalIdentityNumberApiModelSchemasValue.Ssn,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                 | *shared.NationalIdentityNumberApiModelSchemasSourceValue*                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `value`                                                                                                                       | [shared.NationalIdentityNumberApiModelSchemasValue](../../../sdk/models/shared/nationalidentitynumberapimodelschemasvalue.md) | :heavy_minus_sign:                                                                                                            | The type of the national identity number                                                                                      | ssn                                                                                                                           |