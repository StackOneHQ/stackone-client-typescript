# HrisCreateEmployeeRequestDtoNationalIdentityNumber

The national identity number

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoNationalIdentityNumber,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoNationalIdentityNumber = {
  type: {
    value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
  },
  value: "123456789",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                    | [shared.HrisCreateEmployeeRequestDtoType](../../../sdk/models/shared/hriscreateemployeerequestdtotype.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `value`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 123456789                                                                                                 |