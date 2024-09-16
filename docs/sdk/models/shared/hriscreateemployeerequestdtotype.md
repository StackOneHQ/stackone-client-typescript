# HrisCreateEmployeeRequestDtoType

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoType,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoType = {
  value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                         | *shared.HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberSourceValue*                                                                                         | :heavy_minus_sign:                                                                                                                                                    | N/A                                                                                                                                                                   |                                                                                                                                                                       |
| `value`                                                                                                                                                               | [shared.HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasnationalidentitynumbervalue.md) | :heavy_minus_sign:                                                                                                                                                    | The type of the national identity number                                                                                                                              | ssn                                                                                                                                                                   |