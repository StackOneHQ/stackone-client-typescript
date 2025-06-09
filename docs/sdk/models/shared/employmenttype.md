# ~~EmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasValue, EmploymentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentType = {
  sourceValue: "Permanent",
  value: CreateEmploymentApiModelSchemasValue.Permanent,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                     | *shared.CreateEmploymentApiModelSchemasSourceValue*                                                               | :heavy_minus_sign:                                                                                                | The source value of the employment type.                                                                          | Permanent                                                                                                         |
| `value`                                                                                                           | [shared.CreateEmploymentApiModelSchemasValue](../../../sdk/models/shared/createemploymentapimodelschemasvalue.md) | :heavy_minus_sign:                                                                                                | The type of the employment.                                                                                       | permanent                                                                                                         |