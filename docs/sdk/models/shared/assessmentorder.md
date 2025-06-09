# AssessmentOrder

## Example Usage

```typescript
import { AssessmentOrder } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentOrder = {
  application: null,
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
  job: null,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `application`                                                                                 | [shared.AssessmentOrderApplication](../../../sdk/models/shared/assessmentorderapplication.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `candidate`                                                                                   | [shared.AssessmentOrderCandidate](../../../sdk/models/shared/assessmentordercandidate.md)     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `job`                                                                                         | [shared.AssessmentOrderJob](../../../sdk/models/shared/assessmentorderjob.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `package`                                                                                     | [shared.AssessmentOrderPackage](../../../sdk/models/shared/assessmentorderpackage.md)         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `requester`                                                                                   | [shared.Requester](../../../sdk/models/shared/requester.md)                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `resultsUpdateUrl`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Results update url                                                                            | https://exmaple.com/integrations/results/update                                               |