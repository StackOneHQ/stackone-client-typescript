# BackgroundCheckOrderJob

## Example Usage

```typescript
import { BackgroundCheckOrderJob } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderJob = {
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
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `hiringTeam`                                                          | [shared.JobHiringTeam](../../../sdk/models/shared/jobhiringteam.md)[] | :heavy_minus_sign:                                                    | Hiring team for the job.                                              |                                                                       |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Unique identifier                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `passthrough`                                                         | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | Value to pass through to the provider                                 | {<br/>"other_known_names": "John Doe"<br/>}                           |
| `remoteId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | Provider's unique identifier                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `title`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Title of the job                                                      | Software Engineer                                                     |