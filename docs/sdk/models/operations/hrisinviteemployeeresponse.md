# HrisInviteEmployeeResponse

## Example Usage

```typescript
import { HrisInviteEmployeeResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisInviteEmployeeResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  inviteEmployeeResult: {
    data: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    message: "Record invited successfully",
    statusCode: 200,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `inviteEmployeeResult`                                                            | [shared.InviteEmployeeResult](../../../sdk/models/shared/inviteemployeeresult.md) | :heavy_minus_sign:                                                                | Record invited successfully                                                       |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |