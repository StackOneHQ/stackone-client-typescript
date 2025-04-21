# StackoneAuthenticateConnectSessionResponse

## Example Usage

```typescript
import { StackoneAuthenticateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { Categories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneAuthenticateConnectSessionResponse = {
  connectSession: {
    categories: [
      Categories.Ats,
      Categories.Hris,
      Categories.Hris,
      Categories.Crm,
      Categories.Iam,
      Categories.Marketing,
      Categories.Lms,
      Categories.Hris,
      Categories.Documents,
      Categories.Ticketing,
      Categories.Screening,
      Categories.Messaging,
    ],
    createdAt: new Date("2023-07-19T04:50:46.002Z"),
    externalTriggerToken: "f0bc3d88-2178-5423-8c81-b81d6c9da824",
    id: 8267.13,
    organizationId: 9459.67,
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    projectId: "<id>",
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 304,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `connectSession`                                                      | [shared.ConnectSession](../../../sdk/models/shared/connectsession.md) | :heavy_minus_sign:                                                    | The details of the authenticated connect session.                     |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |