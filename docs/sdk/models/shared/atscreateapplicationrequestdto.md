# AtsCreateApplicationRequestDto

## Example Usage

```typescript
import { AtsCreateApplicationRequestDto, AtsCreateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "Hired",
    value: AtsCreateApplicationRequestDtoValue.Hired,
  },
  candidate: {
    company: "Company Inc.",
    country: "United States",
    customFields: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Training Completion Status",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        value: "Completed",
        valueId: "value_456",
      },
    ],
    email: "sestier.romain123@gmail.com",
    firstName: "Romain",
    hiredAt: new Date("2021-01-01T01:01:01.000Z"),
    lastName: "Sestier",
    name: "Romain Sestier",
    passthrough: {
      "other_known_names": "John Doe",
    },
    phoneNumbers: [
      {
        phone: "+447700112233",
      },
    ],
    socialLinks: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/romainsestier/",
      },
    ],
    title: "Software Engineer",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  candidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  jobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
  jobPostingId: "1c702a20-8de8-4d03-ac18-cbf4ac42eb51",
  locationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
  passthrough: {
    "other_known_names": "John Doe",
  },
  questionnaires: [
    {
      answers: [
        {
          id: "answer1",
          type: {},
          values: [
            "Yes",
          ],
        },
      ],
      id: "right_to_work",
    },
  ],
  source: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "LinkedIn",
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                       | [shared.AtsCreateApplicationRequestDtoApplicationStatus](../../../sdk/models/shared/atscreateapplicationrequestdtoapplicationstatus.md)   | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `candidate`                                                                                                                               | [shared.AtsCreateApplicationRequestDtoCandidate](../../../sdk/models/shared/atscreateapplicationrequestdtocandidate.md)                   | :heavy_minus_sign:                                                                                                                        | Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application. |                                                                                                                                           |
| `candidateId`                                                                                                                             | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the candidate. Provide this OR candidate, but not both.                                                              | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                                                      |
| `jobId`                                                                                                                                   | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the job                                                                                                              | 4071538b-3cac-4fbf-ac76-f78ed250ffdd                                                                                                      |
| `jobPostingId`                                                                                                                            | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the job posting that is associated with application                                                                  | 1c702a20-8de8-4d03-ac18-cbf4ac42eb51                                                                                                      |
| `locationId`                                                                                                                              | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the location                                                                                                         | dd8d41d1-5eb8-4408-9c87-9ba44604eae4                                                                                                      |
| `passthrough`                                                                                                                             | Record<string, *any*>                                                                                                                     | :heavy_minus_sign:                                                                                                                        | Value to pass through to the provider                                                                                                     | {<br/>"other_known_names": "John Doe"<br/>}                                                                                               |
| `questionnaires`                                                                                                                          | [shared.CreateQuestionnaire](../../../sdk/models/shared/createquestionnaire.md)[]                                                         | :heavy_minus_sign:                                                                                                                        | Questionnaires associated with the application                                                                                            | {<br/>"id": "right_to_work",<br/>"answers": [<br/>{<br/>"id": "answer1",<br/>"type": "text",<br/>"values": [<br/>"Yes"<br/>]<br/>}<br/>]<br/>} |
| `source`                                                                                                                                  | [shared.AtsCreateApplicationRequestDtoSource](../../../sdk/models/shared/atscreateapplicationrequestdtosource.md)                         | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |