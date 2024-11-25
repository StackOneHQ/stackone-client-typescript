# AssessmentsOrderType

Package type

## Example Usage

```typescript
import { AssessmentsOrderSchemasValue, AssessmentsOrderType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsOrderType = {
  sourceValue: "key_responsibilities",
  value: AssessmentsOrderSchemasValue.Responsibilities,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.AssessmentsOrderSchemasSourceValue*                                                       | :heavy_minus_sign:                                                                                | The source value of the description type.                                                         | key_responsibilities                                                                              |
| `value`                                                                                           | [shared.AssessmentsOrderSchemasValue](../../../sdk/models/shared/assessmentsorderschemasvalue.md) | :heavy_minus_sign:                                                                                | The type of the description.                                                                      | responsibilities                                                                                  |