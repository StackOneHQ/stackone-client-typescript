# AtsGetAssessmentsRequestResponse

## Example Usage

```typescript
import { AtsGetAssessmentsRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AssessmentsOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetAssessmentsRequestResponse = {
  assessmentsOrderResult: {
    data: {
      application: {
        applicationStatus: {
          sourceValue: "Hired",
          value: AssessmentsOrderValue.Hired,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        passthrough: {
          "other_known_names": "John Doe",
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      job: {
        hiringTeam: [
          {
            email: "john.doe@gmail.com",
            firstName: "John",
            lastName: "Doe",
            remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            role: "Software Engineer",
            userId: "123456",
          },
        ],
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        passthrough: {
          "other_known_names": "John Doe",
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        title: "Software Engineer",
      },
      package: {
        description:
          "Skills test to gauge a candidate's proficiency in job-specific skills",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Test 1",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      requester: {
        email: "john.doe@gmail.com",
        firstName: "John",
        lastName: "Doe",
        remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        role: "Software Engineer",
        userId: "123456",
      },
      resultsUpdateUrl: "https://exmaple.com/integrations/results/update",
    },
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `assessmentsOrderResult`                                                              | [shared.AssessmentsOrderResult](../../../sdk/models/shared/assessmentsorderresult.md) | :heavy_minus_sign:                                                                    | The assessments order with the given identifier was retrieved.                        |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |