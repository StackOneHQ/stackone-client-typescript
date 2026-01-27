# AtsUpdateBackgroundCheckResultRequest

## Example Usage

```typescript
import { AtsUpdateBackgroundCheckResultRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateBackgroundCheckResultRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateBackgroundCheckResultRequest = {
  atsUpdateBackgroundCheckResultRequestDto: {
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
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsUpdateBackgroundCheckResultRequestDto`                                                                                                                               | [shared.AtsUpdateBackgroundCheckResultRequestDto](../../../sdk/models/shared/atsupdatebackgroundcheckresultrequestdto.md)                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |