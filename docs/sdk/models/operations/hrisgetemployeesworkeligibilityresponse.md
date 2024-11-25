# HrisGetEmployeesWorkEligibilityResponse

## Example Usage

```typescript
import { HrisGetEmployeesWorkEligibilityResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { WorkEligibilitySchemasDocumentValue, WorkEligibilityValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisGetEmployeesWorkEligibilityResponse = {
  contentType: "<value>",
  statusCode: 307,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  workEligibilityResult: {
    data: {
      document: {
        category: {},
        categoryId: "6530",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        fileFormat: {
          sourceValue: "abc",
          value: WorkEligibilitySchemasDocumentValue.Pdf,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteUrl: "https://example.com/file.pdf",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      issuedBy: {
        value: WorkEligibilityValue.Us,
      },
      number: "1234567890",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `workEligibilityResult`                                                             | [shared.WorkEligibilityResult](../../../sdk/models/shared/workeligibilityresult.md) | :heavy_minus_sign:                                                                  | The work eligibility of the employee with the given identifiers was retrieved.      |