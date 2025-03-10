# Scorecard

## Example Usage

```typescript
import { FieldType, OverallRecommendation, Scorecard } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Scorecard = {
  applicationId: "1011-12",
  authorId: "1617-18",
  candidateId: "5678-9",
  createdAt: new Date("2021-01-01T00:00.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  interviewId: "1314-15",
  label: "Technical Interview",
  overallRecommendation: OverallRecommendation.UnmappedValue,
  remoteApplicationId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteAuthorId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteCandidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteInterviewId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  sections: [
    {
      fields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          label: "Problem Solving",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          required: true,
          type: FieldType.ShortText,
          values: [
            "Excellent",
            "Good",
            "Average",
            "Poor",
          ],
        },
      ],
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Technical Skills",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  updatedAt: new Date("2021-01-01T00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The application ID associated with the scorecard                                              | 1011-12                                                                                       |
| `authorId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The author ID of the scorecard                                                                | 1617-18                                                                                       |
| `candidateId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The candidate ID associated with the scorecard                                                | 5678-9                                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The creation date of the scorecard                                                            | 2021-01-01T00:00.000Z                                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `interviewId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The interview ID associated with the scorecard                                                | 1314-15                                                                                       |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The label of the scorecard                                                                    | Technical Interview                                                                           |
| `overallRecommendation`                                                                       | [shared.OverallRecommendation](../../../sdk/models/shared/overallrecommendation.md)           | :heavy_minus_sign:                                                                            | The overall recommendation                                                                    | recommended                                                                                   |
| `remoteApplicationId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the application                                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteAuthorId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the author                                                    | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteCandidateId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the candidate                                                 | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteInterviewId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the interview                                                 | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `sections`                                                                                    | [shared.ScorecardSection](../../../sdk/models/shared/scorecardsection.md)[]                   | :heavy_minus_sign:                                                                            | The sections in the scorecard                                                                 |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The update date of the scorecard                                                              | 2021-01-01T00:00.000Z                                                                         |