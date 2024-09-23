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
      ConnectSessionTokenCategories.Iam,
      ConnectSessionTokenCategories.Crm,
      ConnectSessionTokenCategories.Iam,
      ConnectSessionTokenCategories.Marketing,
      ConnectSessionTokenCategories.Lms,
      ConnectSessionTokenCategories.Iam,
    ],
    createdAt: new Date("2024-10-11T10:53:38.306Z"),
    id: 710.36,
    organizationId: 871.29,
    originOwnerId: "<value>",
    originOwnerName: "<value>",
    projectId: "<value>",
    token: "<value>",
  },
  contentType: "<value>",
  statusCode: 20218,
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