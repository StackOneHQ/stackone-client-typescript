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
      ConnectSessionTokenCategories.Crm,
      ConnectSessionTokenCategories.Crm,
      ConnectSessionTokenCategories.Iam,
      ConnectSessionTokenCategories.Marketing,
      ConnectSessionTokenCategories.Lms,
      ConnectSessionTokenCategories.Crm,
    ],
    createdAt: new Date("2022-11-23T02:21:00.924Z"),
    id: 8917.73,
    organizationId: 567.13,
    originOwnerId: "<value>",
    originOwnerName: "<value>",
    projectId: "<value>",
    token: "<value>",
  },
  contentType: "<value>",
  statusCode: 963663,
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