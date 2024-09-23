# CreateAnswerType

Type of the answer

## Example Usage

```typescript
import { CreateAnswerType, CreateAnswerValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateAnswerType = {
  sourceValue: "Short Text",
  value: CreateAnswerValue.ShortText,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.CreateAnswerSourceValue*                                            | :heavy_minus_sign:                                                          | The source value of the answer type.                                        | Short Text                                                                  |
| `value`                                                                     | [shared.CreateAnswerValue](../../../sdk/models/shared/createanswervalue.md) | :heavy_minus_sign:                                                          | The type of the answer.                                                     | short_text                                                                  |