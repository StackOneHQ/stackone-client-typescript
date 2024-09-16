# AtsGetApplicationScorecardResponse

## Example Usage

```typescript
import { AtsGetApplicationScorecardResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { FieldType, OverallRecommendation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetApplicationScorecardResponse = {
  contentType: "<value>",
  scorecardsResult: {
    data: {
      applicationId: "1011-12",
      authorId: "1617-18",
      candidateId: "5678-9",
      createdAt: new Date("2021-01-01T00:00.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      interviewId: "1314-15",
      label: "Technical Interview",
      overallRecommendation: OverallRecommendation.NoDecision,
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
              type: FieldType.Date,
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
    },
  },
  statusCode: 780529,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `contentType`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP response content type for this operation                                      |
| `scorecardsResult`                                                                 | [shared.ScorecardsResult](../../../sdk/models/shared/scorecardsresult.md)          | :heavy_minus_sign:                                                                 | The scorecard related to the application with the given identifiers was retrieved. |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP response status code for this operation                                       |
| `rawResponse`                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)              | :heavy_check_mark:                                                                 | Raw HTTP response; suitable for custom response parsing                            |