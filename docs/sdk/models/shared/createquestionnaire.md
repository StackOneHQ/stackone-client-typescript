# CreateQuestionnaire

## Example Usage

```typescript
import { CreateAnswerValue, CreateQuestionnaire } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateQuestionnaire = {
  answers: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        sourceValue: "Short Text",
        value: CreateAnswerValue.ShortText,
      },
      values: [
        "Yes",
        "No Travel",
        "It sounds pretty cool.",
        "Excel",
        "Power Point",
      ],
    },
  ],
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `answers`                                                           | [shared.CreateAnswer](../../../sdk/models/shared/createanswer.md)[] | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | Unique identifier                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                |