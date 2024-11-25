# AssessmentsResultsResult

## Example Usage

```typescript
import { AssessmentsAttachmentValue, AssessmentsResultsResult, AssessmentsResultsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsResultsResult = {
  data: {
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
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    result: {
      sourceValue: "Passed",
      value: AssessmentsResultsValue.Passed,
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
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.AssessmentsResults](../../../sdk/models/shared/assessmentsresults.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `raw`                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]             | :heavy_minus_sign:                                                            | N/A                                                                           |