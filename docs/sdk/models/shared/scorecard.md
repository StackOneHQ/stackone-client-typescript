# Scorecard


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
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `sections`                                                                                    | [shared.ScorecardSection](../../../sdk/models/shared/scorecardsection.md)[]                   | :heavy_minus_sign:                                                                            | The sections in the scorecard                                                                 |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The update date of the scorecard                                                              | 2021-01-01T00:00.000Z                                                                         |