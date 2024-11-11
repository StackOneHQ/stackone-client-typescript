# AtsGetAssessmentsResultResponse

## Example Usage

```typescript
import { AtsGetAssessmentsResultResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AssessmentsResultsSchemasValue, AssessmentsResultsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetAssessmentsResultResponse = {
  assessmentsResultsResult: {
    data: {
      assessmentDate: new Date("2021-01-01T01:01:01.000Z"),
      assessmentId: "f15aad8e-8db6-4194-8299-a525eb8fc30f",
      attachments: {
        contentType: {
          sourceValue: "Text",
          value: AssessmentsResultsSchemasValue.Text,
        },
        url: "http://example.com/resume.pdf",
      },
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
      submissionDate: new Date("2021-01-01T01:01:01.000Z"),
      summary:
        "Candidate demonstrates strong understanding of core concepts, but struggles with application",
    },
  },
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `assessmentsResultsResult`                                                                | [shared.AssessmentsResultsResult](../../../sdk/models/shared/assessmentsresultsresult.md) | :heavy_minus_sign:                                                                        | The assessments result with the given identifier was retrieved.                           |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |