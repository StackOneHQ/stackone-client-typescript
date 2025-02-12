# LmsListUserCompletionsQueryParamFilter

LMS Completions Filter

## Example Usage

```typescript
import { LmsListUserCompletionsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListUserCompletionsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `learningObjectType`                                                                                                                                  | [operations.LmsListUserCompletionsQueryParamLearningObjectType](../../../sdk/models/operations/lmslistusercompletionsqueryparamlearningobjecttype.md) | :heavy_minus_sign:                                                                                                                                    | Filter to select completions by learning object type.                                                                                                 |                                                                                                                                                       |
| `updatedAfter`                                                                                                                                        | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Use a string with a date to only select results updated after that given date                                                                         | 2020-01-01T00:00:00.000Z                                                                                                                              |