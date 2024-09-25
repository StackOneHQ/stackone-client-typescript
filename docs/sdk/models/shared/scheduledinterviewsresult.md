# ScheduledInterviewsResult

## Example Usage

```typescript
import { InterviewPartValue, ScheduledInterviewsResult, ScheduledInterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScheduledInterviewsResult = {
  data: {
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
      value: ScheduledInterviewValue.Unscheduled,
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
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.ScheduledInterview](../../../sdk/models/shared/scheduledinterview.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `raw`                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]             | :heavy_minus_sign:                                                            | N/A                                                                           |