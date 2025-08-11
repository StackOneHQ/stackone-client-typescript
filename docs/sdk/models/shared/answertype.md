# AnswerType

Type of the answer

## Example Usage

```typescript
import { AnswerType, AnswerValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AnswerType = {
  sourceValue: "Short Text",
  value: AnswerValue.ShortText,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `sourceValue`                                                   | *shared.AnswerSourceValue*                                      | :heavy_minus_sign:                                              | The source value of the answer type.                            | Short Text                                                      |
| `value`                                                         | [shared.AnswerValue](../../../sdk/models/shared/answervalue.md) | :heavy_minus_sign:                                              | The type of the answer.                                         | short_text                                                      |