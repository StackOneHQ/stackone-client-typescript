# AtsRejectApplicationResponse

## Example Usage

```typescript
import { AtsRejectApplicationResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsRejectApplicationResponse = {
  contentType: "<value>",
  rejectApplicationResult: {
    data: {
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    message: "Application rejected successfully.",
    statusCode: 200,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
  statusCode: 305,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `rejectApplicationResult`                                                               | [shared.RejectApplicationResult](../../../sdk/models/shared/rejectapplicationresult.md) | :heavy_minus_sign:                                                                      | The application was rejected successfully.                                              |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |