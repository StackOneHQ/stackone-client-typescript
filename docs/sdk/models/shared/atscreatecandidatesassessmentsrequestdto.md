# AtsCreateCandidatesAssessmentsRequestDto

## Example Usage

```typescript
import {
  AtsCreateCandidatesAssessmentsRequestDto,
  AtsCreateCandidatesAssessmentsRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateCandidatesAssessmentsRequestDto = {
  application: {
    applicationStatus: {
      sourceValue: "Hired",
      value: AtsCreateCandidatesAssessmentsRequestDtoValue.Hired,
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
  passthrough: {
    "other_known_names": "John Doe",
  },
  requester: {
    email: "john.doe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    role: "Software Engineer",
    userId: "123456",
  },
  resultsUpdateUrl: "https://exmaple.com/integrations/results/update",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `application`                                                                                                                                   | [shared.AtsCreateCandidatesAssessmentsRequestDtoApplication](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtoapplication.md) | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |
| `candidate`                                                                                                                                     | [shared.AtsCreateCandidatesAssessmentsRequestDtoCandidate](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtocandidate.md)     | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |
| `id`                                                                                                                                            | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Unique identifier                                                                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                            |
| `job`                                                                                                                                           | [shared.AtsCreateCandidatesAssessmentsRequestDtoJob](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtojob.md)                 | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |
| `package`                                                                                                                                       | [shared.AtsCreateCandidatesAssessmentsRequestDtoPackage](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtopackage.md)         | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |
| `passthrough`                                                                                                                                   | Record<string, *any*>                                                                                                                           | :heavy_minus_sign:                                                                                                                              | Value to pass through to the provider                                                                                                           | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                     |
| `requester`                                                                                                                                     | [shared.AtsCreateCandidatesAssessmentsRequestDtoRequester](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtorequester.md)     | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |
| `resultsUpdateUrl`                                                                                                                              | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Results update url                                                                                                                              | https://exmaple.com/integrations/results/update                                                                                                 |