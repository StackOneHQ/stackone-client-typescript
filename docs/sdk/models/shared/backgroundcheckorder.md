# BackgroundCheckOrder

## Example Usage

```typescript
import { BackgroundCheckOrder, BackgroundCheckOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrder = {
  application: {
    applicationStatus: {
      sourceValue: "Hired",
      value: BackgroundCheckOrderValue.Hired,
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
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `application`                                                                                           | [shared.BackgroundCheckOrderApplication](../../../sdk/models/shared/backgroundcheckorderapplication.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `candidate`                                                                                             | [shared.BackgroundCheckOrderCandidate](../../../sdk/models/shared/backgroundcheckordercandidate.md)     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier                                                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                    |
| `job`                                                                                                   | [shared.BackgroundCheckOrderJob](../../../sdk/models/shared/backgroundcheckorderjob.md)                 | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `package`                                                                                               | [shared.BackgroundCheckOrderPackage](../../../sdk/models/shared/backgroundcheckorderpackage.md)         | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `remoteId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Provider's unique identifier                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                    |
| `requester`                                                                                             | [shared.BackgroundCheckOrderRequester](../../../sdk/models/shared/backgroundcheckorderrequester.md)     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `resultsUpdateUrl`                                                                                      | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Results update url                                                                                      | https://exmaple.com/integrations/results/update                                                         |