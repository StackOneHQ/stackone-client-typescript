# StackoneCreateConnectSessionResponse

## Example Usage

```typescript
import { StackoneCreateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectSessionTokenCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneCreateConnectSessionResponse = {
  connectSessionToken: {
    categories: [
      ConnectSessionTokenCategories.Ats,
      ConnectSessionTokenCategories.Hris,
      ConnectSessionTokenCategories.Stackone,
      ConnectSessionTokenCategories.Crm,
      ConnectSessionTokenCategories.Iam,
      ConnectSessionTokenCategories.Marketing,
      ConnectSessionTokenCategories.Lms,
      ConnectSessionTokenCategories.Stackone,
      ConnectSessionTokenCategories.FileStorage,
    ],
    createdAt: new Date("2024-05-25T21:04:00.744Z"),
    id: 4614.79,
    organizationId: 7805.29,
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    projectId: "<id>",
    token: "<value>",
  },
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connectSessionToken`                                                           | [shared.ConnectSessionToken](../../../sdk/models/shared/connectsessiontoken.md) | :heavy_minus_sign:                                                              | The details of the connect session created with token.                          |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |