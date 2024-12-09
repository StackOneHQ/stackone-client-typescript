# AtsListBackgroundCheckPackagesResponse

## Example Usage

```typescript
import { AtsListBackgroundCheckPackagesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListBackgroundCheckPackagesResponse = {
  backgroundCheckPackagePaginated: {
    data: [
      {
        description: "Standard background package for hires",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Standard Background Check",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        tests: [
          {
            description:
              "Skills test to gauge a candidate's proficiency in job-specific skills",
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Test 1",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
        ],
      },
    ],
  },
  contentType: "<value>",
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `backgroundCheckPackagePaginated`                                                                       | [shared.BackgroundCheckPackagePaginated](../../../sdk/models/shared/backgroundcheckpackagepaginated.md) | :heavy_minus_sign:                                                                                      | The list of background check packages was retrieved.                                                    |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |