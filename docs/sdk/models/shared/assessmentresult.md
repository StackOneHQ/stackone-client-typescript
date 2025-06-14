# AssessmentResult

## Example Usage

```typescript
import { AssessmentResult, AssessmentResultValue, AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentResult = {
  attachments: [
    {
      contentType: {
        sourceValue: "Text",
        value: AttachmentValue.Text,
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
    value: AssessmentResultValue.Passed,
  },
  resultUrl: "https://exmaple.com/result?id=xyz",
  score: null,
  startDate: new Date("2021-01-01T01:01:01.000Z"),
  submissionDate: new Date("2021-01-01T01:01:01.000Z"),
  summary: "Test is passed",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attachments`                                                                                 | [shared.Attachment](../../../sdk/models/shared/attachment.md)[]                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `candidate`                                                                                   | [shared.AssessmentResultCandidate](../../../sdk/models/shared/assessmentresultcandidate.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `result`                                                                                      | [shared.Result](../../../sdk/models/shared/result.md)                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `resultUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The test`s result url                                                                         | https://exmaple.com/result?id=xyz                                                             |
| `score`                                                                                       | [shared.Score](../../../sdk/models/shared/score.md)                                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start date of the candidate test                                                          | 2021-01-01T01:01:01.000Z                                                                      |
| `submissionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The submission date of the candidate test                                                     | 2021-01-01T01:01:01.000Z                                                                      |
| `summary`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The summary about the result of the test                                                      | Test is passed                                                                                |