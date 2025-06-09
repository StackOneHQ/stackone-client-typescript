# ~~HrisUpdateEmployeeRequestDtoEmploymentType~~

The employee employment type

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoEmploymentType,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentTypeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoEmploymentType = {
  sourceValue: "Permanent",
  value: HrisUpdateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                         | *shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentTypeSourceValue*                                                                                 | :heavy_minus_sign:                                                                                                                                    | The source value of the employment type.                                                                                                              | Permanent                                                                                                                                             |
| `value`                                                                                                                                               | [shared.HrisUpdateEmployeeRequestDtoSchemasEmploymentTypeValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemasemploymenttypevalue.md) | :heavy_minus_sign:                                                                                                                                    | The type of the employment.                                                                                                                           | permanent                                                                                                                                             |