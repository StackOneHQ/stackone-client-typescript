# ~~HrisUpdateEmployeeRequestDtoSchemasEmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentType,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoSchemasEmploymentType = {
  sourceValue: "Permanent",
  value:
    HrisUpdateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               | Example                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                             | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentEmploymentTypeSourceValue*                                                                                           | :heavy_minus_sign:                                                                                                                                                        | The source value of the employment type.                                                                                                                                  | Permanent                                                                                                                                                                 |
| `value`                                                                                                                                                                   | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymentemploymenttypevalue.md) | :heavy_minus_sign:                                                                                                                                                        | The type of the employment.                                                                                                                                               | permanent                                                                                                                                                                 |