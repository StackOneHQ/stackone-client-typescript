# AssessmentsResults

## Example Usage

```typescript
import { AssessmentsResults, AssessmentsResultsValue, Status } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsResults = {
    assessmentDate: new Date("2021-01-01T01:01:01.000Z"),
    assessmentId: "f15aad8e-8db6-4194-8299-a525eb8fc30f",
    attachments: {
        contentType: {
            sourceValue: {},
            value: AssessmentsResultsValue.Text,
        },
        url: "http://example.com/resume.pdf",
    },
    candidate: {
        resultUrl: "https://exmaple.com/result?id=xyz",
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    result: "pass",
    score: {
        label: "Percentage",
        max: "100",
        min: "0",
        value: "80",
    },
    status: Status.Completed,
    submissionDate: new Date("2021-01-01T01:01:01.000Z"),
    summary:
        "Candidate demonstrates strong understanding of core concepts, but struggles with application",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `assessmentDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The start date of the candidate assessment                                                      | 2021-01-01T01:01:01.000Z                                                                        |
| `assessmentId`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | The id of the candidate assessment                                                              | f15aad8e-8db6-4194-8299-a525eb8fc30f                                                            |
| `attachments`                                                                                   | [shared.Attachments](../../../sdk/models/shared/attachments.md)                                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `candidate`                                                                                     | [shared.AssessmentsResultsCandidate](../../../sdk/models/shared/assessmentsresultscandidate.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `result`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | The final result to candidate whether pass or fail                                              | pass                                                                                            |
| `score`                                                                                         | [shared.Score](../../../sdk/models/shared/score.md)                                             | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `status`                                                                                        | [shared.Status](../../../sdk/models/shared/status.md)                                           | :heavy_minus_sign:                                                                              | The status of the candidates assessment.                                                        | completed                                                                                       |
| `submissionDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The submission date of the candidate assessment                                                 | 2021-01-01T01:01:01.000Z                                                                        |
| `summary`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The summary about the result of the assessments                                                 | Candidate demonstrates strong understanding of core concepts, but struggles with application    |