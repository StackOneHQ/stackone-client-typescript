# AtsListBackgroundCheckRequestResponse

## Example Usage

```typescript
import { AtsListBackgroundCheckRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AssessmentsPackagesTestApiModelValue, BackgroundCheckOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsListBackgroundCheckRequestResponse = {
  backgroundCheckOrderPaginated: {
    data: [
      {
        application: {
          applicationStatus: {
            sourceValue: "Hired",
            value: BackgroundCheckOrderValue.Hired,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          passthrough: {
            "other_known_names": "John Doe",
          },
        },
        candidate: {
          emails: [
            {
              type: "personal",
              value: "sestier.romain123@gmail.com",
            },
          ],
          firstName: "Romain",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          lastName: "Sestier",
          passthrough: {
            "other_known_names": "John Doe",
          },
          profileUrl: "https://exmaple.com/candidate?id=xyz",
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        job: {
          hiringTeam: [
            {
              email: "john.doe@gmail.com",
              firstName: "John",
              lastName: "Doe",
              role: "Software Engineer",
              userId: "123456",
            },
          ],
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          passthrough: {
            "other_known_names": "John Doe",
          },
          title: "Software Engineer",
        },
        package: {
          description: "Standard background package for hires",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Standard Background Check",
          tests: [
            {
              description:
                "Skills test to gauge a candidate's proficiency in job-specific skills",
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              name: "Test 1",
              type: {
                sourceValue: "key_responsibilities",
                value: AssessmentsPackagesTestApiModelValue.Responsibilities,
              },
            },
          ],
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        requester: {
          emails: [
            {
              type: "personal",
              value: "sestier.romain123@gmail.com",
            },
          ],
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          passthrough: {
            "other_known_names": "John Doe",
          },
        },
        resultsUpdateUrl: "https://exmaple.com/integrations/results/update",
      },
    ],
  },
  contentType: "<value>",
  statusCode: 414,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `backgroundCheckOrderPaginated`                                                                     | [shared.BackgroundCheckOrderPaginated](../../../sdk/models/shared/backgroundcheckorderpaginated.md) | :heavy_minus_sign:                                                                                  | The list of background check requests was retrieved.                                                |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |