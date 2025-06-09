# ~~EmploymentEmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { EmploymentEmploymentType, EmploymentSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentEmploymentType = {
  sourceValue: "Permanent",
  value: EmploymentSchemasValue.Permanent,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.EmploymentSchemasSourceValue*                                                 | :heavy_minus_sign:                                                                    | The source value of the employment type.                                              | Permanent                                                                             |
| `value`                                                                               | [shared.EmploymentSchemasValue](../../../sdk/models/shared/employmentschemasvalue.md) | :heavy_minus_sign:                                                                    | The type of the employment.                                                           | permanent                                                                             |