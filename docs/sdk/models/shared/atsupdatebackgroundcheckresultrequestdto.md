# AtsUpdateBackgroundCheckResultRequestDto

## Example Usage

```typescript
import {
  AtsUpdateBackgroundCheckResultRequestDto,
  AtsUpdateBackgroundCheckResultRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateBackgroundCheckResultRequestDto = {
  attachments: [
    {
      contentType: null,
      url: "http://example.com/resume.pdf",
    },
  ],
  candidate: null,
  passthrough: {
    "other_known_names": "John Doe",
  },
  result: {
    sourceValue: "Passed",
    value: AtsUpdateBackgroundCheckResultRequestDtoValue.Passed,
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

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachments`                                                                                                                               | [shared.Attachment](../../../sdk/models/shared/attachment.md)[]                                                                             | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `candidate`                                                                                                                                 | [shared.AtsUpdateBackgroundCheckResultRequestDtoCandidate](../../../sdk/models/shared/atsupdatebackgroundcheckresultrequestdtocandidate.md) | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `passthrough`                                                                                                                               | Record<string, *any*>                                                                                                                       | :heavy_minus_sign:                                                                                                                          | Value to pass through to the provider                                                                                                       | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                 |
| `result`                                                                                                                                    | [shared.AtsUpdateBackgroundCheckResultRequestDtoResult](../../../sdk/models/shared/atsupdatebackgroundcheckresultrequestdtoresult.md)       | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `resultUrl`                                                                                                                                 | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The test`s result url                                                                                                                       | https://exmaple.com/result?id=xyz                                                                                                           |
| `score`                                                                                                                                     | [shared.Score](../../../sdk/models/shared/score.md)                                                                                         | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `startDate`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_minus_sign:                                                                                                                          | The start date of the candidate test                                                                                                        | 2021-01-01T01:01:01.000Z                                                                                                                    |
| `submissionDate`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_minus_sign:                                                                                                                          | The submission date of the candidate test                                                                                                   | 2021-01-01T01:01:01.000Z                                                                                                                    |
| `summary`                                                                                                                                   | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The summary about the result of the test                                                                                                    | Test is passed                                                                                                                              |