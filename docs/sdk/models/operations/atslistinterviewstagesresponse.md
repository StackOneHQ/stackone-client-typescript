# AtsListInterviewStagesResponse

## Example Usage

```typescript
import { AtsListInterviewStagesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListInterviewStagesResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 211834,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `interviewStagesPaginated`                                                                | [shared.InterviewStagesPaginated](../../../sdk/models/shared/interviewstagespaginated.md) | :heavy_minus_sign:                                                                        | The list of interview-stages was retrieved.                                               |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |