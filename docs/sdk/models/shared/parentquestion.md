# ParentQuestion

## Example Usage

```typescript
import { ParentQuestion, QuestionSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ParentQuestion = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `conditionType`                                                                    | [shared.ConditionType](../../../sdk/models/shared/conditiontype.md)                | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | Unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                               |
| `optionIds`                                                                        | *string*[]                                                                         | :heavy_minus_sign:                                                                 | List of parent questions's option IDs                                              | [<br/>"123e4567-e89b-12d3-a456-426614174000",<br/>"523e1234-e89b-fdd2-a456-762545121101"<br/>] |
| `remoteId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Provider's unique identifier                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                               |