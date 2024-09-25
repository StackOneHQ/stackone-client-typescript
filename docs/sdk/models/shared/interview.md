# Interview

## Example Usage

```typescript
import { Interview, InterviewPartValue, InterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Interview = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  endAt: new Date("2021-01-01T01:01:01.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  interviewParts: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      endAt: new Date("2021-01-01T18:00:00.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      interviewerIds: [
        "cx28iQahdfDHa",
        "cx28iQokkD78das",
      ],
      meetingProvider: "zoom",
      meetingUrl: "zoomus://zoom.us/join?confno=123456789",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteInterviewerIds: [
        "cx28iQahdfDHa",
        "cx28iQokkD78das",
      ],
      startAt: new Date("2021-01-01T17:00:00.000Z"),
      title: "Interview (Informal Interview) - Elon and StackOne",
      type: {
        sourceValue: "Onsite Interview",
        value: InterviewPartValue.OnSite,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
  interviewStage: {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
  interviewStatus: {
    sourceValue: "Unscheduled",
    value: InterviewValue.Unscheduled,
  },
  interviewers: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  remoteApplicationId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteInterviewStageId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteInterviewerIds: [
    "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  ],
  startAt: new Date("2021-01-01T01:01:01.000Z"),
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Interview created date                                                                        | 2021-01-01T01:01:01.000Z                                                                      |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Interview end date                                                                            | 2021-01-01T01:01:01.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `interviewParts`                                                                              | [shared.InterviewPart](../../../sdk/models/shared/interviewpart.md)[]                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `interviewStage`                                                                              | [shared.InterviewInterviewStage](../../../sdk/models/shared/interviewinterviewstage.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `interviewStageId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `interviewStatus`                                                                             | [shared.InterviewStatus](../../../sdk/models/shared/interviewstatus.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `interviewerIds`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `interviewers`                                                                                | [shared.Interviewer](../../../sdk/models/shared/interviewer.md)[]                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `meetingUrl`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteApplicationId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the application                                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteInterviewStageId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the interview stage                                           | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteInterviewerIds`                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Provider's unique identifiers of the interviewers                                             | [<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48",<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48"<br/>] |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Interview start date                                                                          | 2021-01-01T01:01:01.000Z                                                                      |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Interview updated date                                                                        | 2021-01-01T01:01:01.000Z                                                                      |