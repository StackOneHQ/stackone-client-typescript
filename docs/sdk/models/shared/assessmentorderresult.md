# AssessmentOrderResult

## Example Usage

```typescript
import { AssessmentOrderResult, AssessmentOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentOrderResult = {
  data: {
    application: {
      applicationStatus: {
        sourceValue: "Hired",
        value: AssessmentOrderValue.Hired,
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      passthrough: {
        "other_known_names": "John Doe",
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    candidate: {
      emails: null,
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.AssessmentOrder](../../../sdk/models/shared/assessmentorder.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `raw`                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]       | :heavy_minus_sign:                                                      | N/A                                                                     |