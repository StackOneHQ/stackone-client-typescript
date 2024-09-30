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
      Categories.Lms,
      Categories.Crm,
      Categories.Iam,
      Categories.Marketing,
      Categories.Lms,
      Categories.Iam,
    ],
    createdAt: new Date("2023-09-15T13:50:38.886Z"),
    id: 9255.97,
    organizationId: 710.36,
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    projectId: "<id>",
  },
  contentType: "<value>",
  statusCode: 100,
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