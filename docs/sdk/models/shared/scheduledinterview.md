# ScheduledInterview


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | Interview created date                                                                                      | 2021-01-01T01:01:01.000Z                                                                                    |
| `endAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | Interview end date                                                                                          | 2021-01-01T01:01:01.000Z                                                                                    |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Unique identifier                                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                        |
| `interviewParts`                                                                                            | [shared.InterviewPart](../../../sdk/models/shared/interviewpart.md)[]                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `interviewStage`                                                                                            | [shared.ScheduledInterviewInterviewStage](../../../sdk/models/shared/scheduledinterviewinterviewstage.md)   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `interviewStageId`                                                                                          | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `interviewStatus`                                                                                           | [shared.ScheduledInterviewInterviewStatus](../../../sdk/models/shared/scheduledinterviewinterviewstatus.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `interviewerIds`                                                                                            | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `interviewers`                                                                                              | [shared.Interviewer](../../../sdk/models/shared/interviewer.md)[]                                           | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `meetingUrl`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `remoteApplicationId`                                                                                       | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Provider's unique identifier of the application                                                             | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                        |
| `remoteId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Provider's unique identifier                                                                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                        |
| `remoteInterviewStageId`                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Provider's unique identifier of the interview stage                                                         | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                        |
| `remoteInterviewerIds`                                                                                      | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Provider's unique identifiers of the interviewers                                                           | [<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48",<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48"<br/>]              |
| `startAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | Interview start date                                                                                        | 2021-01-01T01:01:01.000Z                                                                                    |
| `updatedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | Interview updated date                                                                                      | 2021-01-01T01:01:01.000Z                                                                                    |