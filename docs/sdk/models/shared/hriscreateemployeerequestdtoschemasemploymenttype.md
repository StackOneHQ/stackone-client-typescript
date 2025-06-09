# ~~HrisCreateEmployeeRequestDtoSchemasEmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentType,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoSchemasEmploymentType = {
  sourceValue: "Permanent",
  value:
    HrisCreateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue.Permanent,
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               | Example                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                             | *shared.HrisCreateEmployeeRequestDtoSchemasEmploymentEmploymentTypeSourceValue*                                                                                           | :heavy_minus_sign:                                                                                                                                                        | The source value of the employment type.                                                                                                                                  | Permanent                                                                                                                                                                 |
| `value`                                                                                                                                                                   | [shared.HrisCreateEmployeeRequestDtoSchemasEmploymentEmploymentTypeValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemasemploymentemploymenttypevalue.md) | :heavy_minus_sign:                                                                                                                                                        | The type of the employment.                                                                                                                                               | permanent                                                                                                                                                                 |