# Question

## Example Usage

```typescript
import { Question, QuestionSchemasValue, QuestionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Question = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  multipleChoiceAnswers: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  parentQuestion: {
    conditionType: {
      sourceValue: "EqualsTo",
      value: QuestionSchemasValue.EqualsTo,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    optionIds: [
      "123e4567-e89b-12d3-a456-426614174000",
      "523e1234-e89b-fdd2-a456-762545121101",
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOptionIds: [
      "123e4567-e89b-12d3-a456-426614174000",
      "523e1234-e89b-fdd2-a456-762545121101",
    ],
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "ShortText",
    value: QuestionValue.ShortText,
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique identifier                                                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `multipleChoiceAnswers`                                                                               | [shared.QuestionMultipleChoiceAnswers](../../../sdk/models/shared/questionmultiplechoiceanswers.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `name`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `parentQuestion`                                                                                      | [shared.ParentQuestion](../../../sdk/models/shared/parentquestion.md)                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `remoteId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Provider's unique identifier                                                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `required`                                                                                            | *shared.QuestionRequired*                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `text`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `type`                                                                                                | [shared.QuestionType](../../../sdk/models/shared/questiontype.md)                                     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |