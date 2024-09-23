# EmploymentType

The type of employment (e.g., contractor, permanent)

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasValue, EmploymentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentType = {
  sourceValue: {},
  value: CreateEmploymentApiModelSchemasValue.Permanent,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                     | *shared.CreateEmploymentApiModelSchemasSourceValue*                                                               | :heavy_minus_sign:                                                                                                | The source value of the employment type.                                                                          | Permanent                                                                                                         |
| `value`                                                                                                           | [shared.CreateEmploymentApiModelSchemasValue](../../../sdk/models/shared/createemploymentapimodelschemasvalue.md) | :heavy_minus_sign:                                                                                                | The type of the employment.                                                                                       | permanent                                                                                                         |