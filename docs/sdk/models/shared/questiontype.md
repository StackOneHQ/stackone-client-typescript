# QuestionType

## Example Usage

```typescript
import { QuestionType, QuestionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: QuestionType = {
  sourceValue: {},
  value: QuestionValue.ShortText,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sourceValue`                                                       | *shared.QuestionSourceValue*                                        | :heavy_minus_sign:                                                  | The source value of the questions type.                             | ShortText                                                           |
| `value`                                                             | [shared.QuestionValue](../../../sdk/models/shared/questionvalue.md) | :heavy_minus_sign:                                                  | The type of the questions.                                          | short_text                                                          |