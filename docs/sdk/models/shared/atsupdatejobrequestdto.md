# AtsUpdateJobRequestDto

## Example Usage

```typescript
import { AtsUpdateJobRequestDto, AtsUpdateJobRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateJobRequestDto = {
  code: "184919",
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
  departmentIds: [
    "308570",
    "308571",
    "308572",
  ],
  description: "Responsible for identifying business requirements",
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
  interviewStages: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
  jobStatus: {
    sourceValue: "Published",
    value: AtsUpdateJobRequestDtoValue.Published,
  },
  locationIds: [
    "668570",
    "678571",
    "688572",
  ],
  passthrough: {
    "other_known_names": "John Doe",
  },
  title: "Software Engineer",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Code of the job                                                                                                                            | 184919                                                                                                                                     |
| `confidential`                                                                                                                             | [shared.AtsUpdateJobRequestDtoConfidential](../../../sdk/models/shared/atsupdatejobrequestdtoconfidential.md)                              | :heavy_minus_sign:                                                                                                                         | Confidential status of the job                                                                                                             |                                                                                                                                            |
| `customFields`                                                                                                                             | [shared.CustomFields](../../../sdk/models/shared/customfields.md)[]                                                                        | :heavy_minus_sign:                                                                                                                         | The job custom fields                                                                                                                      |                                                                                                                                            |
| `departmentIds`                                                                                                                            | *string*[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                         | Department ids of the job                                                                                                                  | [<br/>"308570",<br/>"308571",<br/>"308572"<br/>]                                                                                           |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Description of the job                                                                                                                     | Responsible for identifying business requirements                                                                                          |
| `hiringTeam`                                                                                                                               | [shared.AtsJobHiringTeam](../../../sdk/models/shared/atsjobhiringteam.md)[]                                                                | :heavy_minus_sign:                                                                                                                         | Hiring team for the job.                                                                                                                   |                                                                                                                                            |
| `interviewStages`                                                                                                                          | [shared.InterviewStage](../../../sdk/models/shared/interviewstage.md)[]                                                                    | :heavy_minus_sign:                                                                                                                         | Interview stages for the job.                                                                                                              |                                                                                                                                            |
| `jobStatus`                                                                                                                                | [shared.AtsUpdateJobRequestDtoJobStatus](../../../sdk/models/shared/atsupdatejobrequestdtojobstatus.md)                                    | :heavy_minus_sign:                                                                                                                         | Status of the job                                                                                                                          |                                                                                                                                            |
| `locationIds`                                                                                                                              | *string*[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                         | Location ids of the job                                                                                                                    | [<br/>"668570",<br/>"678571",<br/>"688572"<br/>]                                                                                           |
| `passthrough`                                                                                                                              | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Value to pass through to the provider                                                                                                      | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                |
| ~~`status`~~                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Status of the job | archived                                                                                                                                   |
| `title`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Title of the job                                                                                                                           | Software Engineer                                                                                                                          |
| `unifiedCustomFields`                                                                                                                      | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Custom Unified Fields configured in your StackOne project                                                                                  | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                   |