# AtsGetInterviewResponse

## Example Usage

```typescript
import { AtsGetInterviewResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { InterviewPartValue, InterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetInterviewResponse = {
    contentType: "<value>",
    interviewsResult: {
        data: {
            createdAt: new Date("2021-01-01T01:01:01.000Z"),
            endAt: new Date("2021-01-01T01:01:01.000Z"),
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            interviewParts: [
                {
                    createdAt: new Date("2021-01-01T01:01:01.000Z"),
                    endAt: new Date("2021-01-01T18:00:00.000Z"),
                    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                    interviewerIds: ["cx28iQahdfDHa", "cx28iQokkD78das"],
                    meetingProvider: "zoom",
                    meetingUrl: "zoomus://zoom.us/join?confno=123456789",
                    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                    remoteInterviewerIds: ["cx28iQahdfDHa", "cx28iQokkD78das"],
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
            updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
    },
    statusCode: 870013,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `interviewsResult`                                                        | [shared.InterviewsResult](../../../sdk/models/shared/interviewsresult.md) | :heavy_minus_sign:                                                        | The interview with the given identifier was retrieved.                    |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |