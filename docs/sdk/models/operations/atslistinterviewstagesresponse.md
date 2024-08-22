# AtsListInterviewStagesResponse

## Example Usage

```typescript
import { AtsListInterviewStagesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListInterviewStagesResponse = {
    contentType: "<value>",
    interviewStagesPaginated: {
        data: [
            {
                createdAt: new Date("2021-01-01T01:01:01.000Z"),
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                updatedAt: new Date("2021-01-01T01:01:01.000Z"),
            },
        ],
    },
    statusCode: 338007,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `interviewStagesPaginated`                                                                | [shared.InterviewStagesPaginated](../../../sdk/models/shared/interviewstagespaginated.md) | :heavy_minus_sign:                                                                        | The list of interview-stages was retrieved.                                               |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |