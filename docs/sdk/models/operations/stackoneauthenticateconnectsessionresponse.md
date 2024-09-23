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
      Categories.Marketing,
      Categories.Crm,
      Categories.Iam,
      Categories.Marketing,
      Categories.Lms,
      Categories.Crm,
    ],
    createdAt: new Date("2024-09-04T09:11:49.246Z"),
    id: 9636.63,
    organizationId: 3834.42,
    originOwnerId: "<value>",
    originOwnerName: "<value>",
    projectId: "<value>",
  },
  contentType: "<value>",
  statusCode: 791725,
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
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |