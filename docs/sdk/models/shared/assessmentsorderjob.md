# AssessmentsOrderJob

## Example Usage

```typescript
import { AssessmentsOrderJob } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsOrderJob = {
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
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `hiringTeam`                                                                                                                | [shared.AssessmentsRequestsJobHiringTeamApiModel](../../../sdk/models/shared/assessmentsrequestsjobhiringteamapimodel.md)[] | :heavy_minus_sign:                                                                                                          | Hiring team for the job.                                                                                                    |                                                                                                                             |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unique identifier                                                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                        |
| `passthrough`                                                                                                               | Record<string, *any*>                                                                                                       | :heavy_minus_sign:                                                                                                          | Value to pass through to the provider                                                                                       | {<br/>"other_known_names": "John Doe"<br/>}                                                                                 |
| `title`                                                                                                                     | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Title of the job                                                                                                            | Software Engineer                                                                                                           |