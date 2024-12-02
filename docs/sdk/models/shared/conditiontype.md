# ConditionType

## Example Usage

```typescript
import { ConditionType, QuestionSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConditionType = {
  sourceValue: "EqualsTo",
  value: QuestionSchemasValue.EqualsTo,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.QuestionSchemasSourceValue*                                               | :heavy_minus_sign:                                                                | The source value of the question's condition type                                 | EqualsTo                                                                          |
| `value`                                                                           | [shared.QuestionSchemasValue](../../../sdk/models/shared/questionschemasvalue.md) | :heavy_minus_sign:                                                                | The type of the question's condition                                              | equals_to                                                                         |