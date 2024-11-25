# AssessmentsOrderResult

## Example Usage

```typescript
import { AssessmentsOrderResult, AssessmentsOrderSchemasValue, AssessmentsOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsOrderResult = {
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
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
      type: {
        sourceValue: "key_responsibilities",
        value: AssessmentsOrderSchemasValue.Responsibilities,
      },
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.AssessmentsOrder](../../../sdk/models/shared/assessmentsorder.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `raw`                                                                     | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]         | :heavy_minus_sign:                                                        | N/A                                                                       |