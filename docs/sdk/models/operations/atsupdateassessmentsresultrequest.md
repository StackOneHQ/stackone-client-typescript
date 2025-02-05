# AtsUpdateAssessmentsResultRequest

## Example Usage

```typescript
import { AtsUpdateAssessmentsResultRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateCandidatesAssessmentsResultsRequestDtoValue, AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateAssessmentsResultRequest = {
  atsUpdateCandidatesAssessmentsResultsRequestDto: {
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
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    passthrough: {
      "other_known_names": "John Doe",
    },
    result: {
      sourceValue: "Passed",
      value: AtsUpdateCandidatesAssessmentsResultsRequestDtoValue.Passed,
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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `atsUpdateCandidatesAssessmentsResultsRequestDto`                                                                                       | [shared.AtsUpdateCandidatesAssessmentsResultsRequestDto](../../../sdk/models/shared/atsupdatecandidatesassessmentsresultsrequestdto.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `id`                                                                                                                                    | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `xAccountId`                                                                                                                            | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The account identifier                                                                                                                  |