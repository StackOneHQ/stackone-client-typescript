# ~~HrisCreateEmployeeRequestDtoEmploymentType~~

The employee employment type

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoEmploymentType,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoEmploymentType = {
  sourceValue: "Permanent",
  value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                         | *shared.HrisCreateEmployeeRequestDtoSchemasEmploymentTypeSourceValue*                                                                                 | :heavy_minus_sign:                                                                                                                                    | The source value of the employment type.                                                                                                              | Permanent                                                                                                                                             |
| `value`                                                                                                                                               | [shared.HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasemploymenttypevalue.md) | :heavy_minus_sign:                                                                                                                                    | The type of the employment.                                                                                                                           | permanent                                                                                                                                             |