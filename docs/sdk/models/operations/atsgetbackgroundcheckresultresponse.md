# AtsGetBackgroundCheckResultResponse

## Example Usage

```typescript
import { AtsGetBackgroundCheckResultResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AssessmentsAttachmentValue, BackgroundCheckResultsResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetBackgroundCheckResultResponse = {
  backgroundCheckResultsResult: {
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
      value: BackgroundCheckResultsResultValue.Passed,
    },
    resultUrl: "https://exmaple.com/result?id=xyz",
    startDate: new Date("2021-01-01T01:01:01.000Z"),
    submissionDate: new Date("2021-01-01T01:01:01.000Z"),
    summary: "Test is passed",
  },
  contentType: "<value>",
  statusCode: 505,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `backgroundCheckResultsResult`                                                                    | [shared.BackgroundCheckResultsResult](../../../sdk/models/shared/backgroundcheckresultsresult.md) | :heavy_minus_sign:                                                                                | The background check result with the given identifier was retrieved.                              |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |