# AtsGetBackgroundCheckPackageResponse

## Example Usage

```typescript
import { AtsGetBackgroundCheckPackageResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetBackgroundCheckPackageResponse = {
  backgroundCheckPackageResult: {
    data: {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
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
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 200,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `backgroundCheckPackageResult`                                                                    | [shared.BackgroundCheckPackageResult](../../../sdk/models/shared/backgroundcheckpackageresult.md) | :heavy_minus_sign:                                                                                | The background check package with the given identifier was retrieved.                             |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |