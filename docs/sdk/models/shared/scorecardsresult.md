# ScorecardsResult

## Example Usage

```typescript
import { FieldType, OverallRecommendation, ScorecardsResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScorecardsResult = {
  data: {
    applicationId: "1011-12",
    authorId: "1617-18",
    candidateId: "5678-9",
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    interviewId: "1314-15",
    label: "Technical Interview",
    overallRecommendation: OverallRecommendation.No,
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
            type: FieldType.UnmappedValue,
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
    updatedAt: new Date("2021-01-01T00:00:00.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Scorecard](../../../sdk/models/shared/scorecard.md)       | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |