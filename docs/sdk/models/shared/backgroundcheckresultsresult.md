# BackgroundCheckResultsResult

## Example Usage

```typescript
import {
  AssessmentsAttachmentValue,
  BackgroundCheckResultsResult,
  BackgroundCheckResultsResultValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckResultsResult = {
  attachments: [
    {
      contentType: {
        sourceValue: "Text",
        value: AssessmentsAttachmentValue.Text,
      },
      url: "http://example.com/resume.pdf",
    },
  ],
  candidate: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    profileUrl: "https://exmaple.com/candidate?id=xyz",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  result: {
    sourceValue: "Passed",
    value: BackgroundCheckResultsResultValue.Passed,
  },
  resultUrl: "https://exmaple.com/result?id=xyz",
  score: {
    label: "Percentage",
    max: "100",
    min: "0",
    value: "80",
  },
  startDate: new Date("2021-01-01T01:01:01.000Z"),
  submissionDate: new Date("2021-01-01T01:01:01.000Z"),
  summary: "Test is passed",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `attachments`                                                                                                       | [shared.AssessmentsAttachment](../../../sdk/models/shared/assessmentsattachment.md)[]                               | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `candidate`                                                                                                         | [shared.BackgroundCheckResultsResultCandidate](../../../sdk/models/shared/backgroundcheckresultsresultcandidate.md) | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Unique identifier                                                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                |
| `remoteId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Provider's unique identifier                                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                |
| `result`                                                                                                            | [shared.BackgroundCheckResultsResultResult](../../../sdk/models/shared/backgroundcheckresultsresultresult.md)       | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `resultUrl`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The test`s result url                                                                                               | https://exmaple.com/result?id=xyz                                                                                   |
| `score`                                                                                                             | [shared.BackgroundCheckResultsResultScore](../../../sdk/models/shared/backgroundcheckresultsresultscore.md)         | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `startDate`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | The start date of the candidate test                                                                                | 2021-01-01T01:01:01.000Z                                                                                            |
| `submissionDate`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | The submission date of the candidate test                                                                           | 2021-01-01T01:01:01.000Z                                                                                            |
| `summary`                                                                                                           | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The summary about the result of the test                                                                            | Test is passed                                                                                                      |