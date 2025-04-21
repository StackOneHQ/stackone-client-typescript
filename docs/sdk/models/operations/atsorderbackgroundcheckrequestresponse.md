# AtsOrderBackgroundCheckRequestResponse

## Example Usage

```typescript
import { AtsOrderBackgroundCheckRequestResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsOrderBackgroundCheckRequestResponse = {
  contentType: "<value>",
  createBackgroundCheckOrderResult: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    testUrl: "https://exmaple.com/integrations/candidate/test",
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `createBackgroundCheckOrderResult`                                                                        | [shared.CreateBackgroundCheckOrderResult](../../../sdk/models/shared/createbackgroundcheckorderresult.md) | :heavy_minus_sign:                                                                                        | The order request of the background check for candidate.                                                  |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |