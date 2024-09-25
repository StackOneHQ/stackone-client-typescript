# JobPostingQuestionnaire

## Example Usage

```typescript
import { JobPostingQuestionnaire, QuestionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingQuestionnaire = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  questions: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      multipleChoiceAnswers: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        sourceValue: "ShortText",
        value: QuestionValue.ShortText,
      },
    },
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                        |
| `internal`                                                  | *shared.JobPostingQuestionnaireInternal*                    | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `questions`                                                 | [shared.Question](../../../sdk/models/shared/question.md)[] | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `remoteId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | Provider's unique identifier                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                        |