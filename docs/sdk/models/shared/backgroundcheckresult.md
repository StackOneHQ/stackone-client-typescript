# BackgroundCheckResult

## Example Usage

```typescript
import { AttachmentValue, BackgroundCheckResult, BackgroundCheckResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckResult = {
  attachments: [
    {
      contentType: {
        sourceValue: "Text",
        value: AttachmentValue.Text,
      },
      url: "http://example.com/resume.pdf",
    },
  ],
  candidate: null,
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  result: {
    sourceValue: "Passed",
    value: BackgroundCheckResultValue.Passed,
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `attachments`                                                                                         | [shared.Attachment](../../../sdk/models/shared/attachment.md)[]                                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `candidate`                                                                                           | [shared.BackgroundCheckResultCandidate](../../../sdk/models/shared/backgroundcheckresultcandidate.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique identifier                                                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `remoteId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Provider's unique identifier                                                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `result`                                                                                              | [shared.BackgroundCheckResultResult](../../../sdk/models/shared/backgroundcheckresultresult.md)       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `resultUrl`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The test`s result url                                                                                 | https://exmaple.com/result?id=xyz                                                                     |
| `score`                                                                                               | [shared.BackgroundCheckResultScore](../../../sdk/models/shared/backgroundcheckresultscore.md)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `startDate`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The start date of the candidate test                                                                  | 2021-01-01T01:01:01.000Z                                                                              |
| `submissionDate`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The submission date of the candidate test                                                             | 2021-01-01T01:01:01.000Z                                                                              |
| `summary`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The summary about the result of the test                                                              | Test is passed                                                                                        |