# StackoneCreateConnectSessionResponse

## Example Usage

```typescript
import { StackoneCreateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectSessionTokenAuthLinkCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneCreateConnectSessionResponse = {
  connectSessionTokenAuthLink: {
    authLinkUrl: "https://true-wasabi.net",
    categories: [
      ConnectSessionTokenAuthLinkCategories.Ats,
      ConnectSessionTokenAuthLinkCategories.Hris,
      ConnectSessionTokenAuthLinkCategories.Iam,
      ConnectSessionTokenAuthLinkCategories.Crm,
      ConnectSessionTokenAuthLinkCategories.Iam,
      ConnectSessionTokenAuthLinkCategories.Marketing,
      ConnectSessionTokenAuthLinkCategories.Lms,
      ConnectSessionTokenAuthLinkCategories.Stackone,
      ConnectSessionTokenAuthLinkCategories.Hris,
    ],
    createdAt: new Date("2023-12-03T08:28:57.162Z"),
    id: 1433.53,
    organizationId: 9446.69,
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    projectId: "<id>",
    token: "<value>",
  },
  contentType: "<value>",
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `connectSessionTokenAuthLink`                                                                   | [shared.ConnectSessionTokenAuthLink](../../../sdk/models/shared/connectsessiontokenauthlink.md) | :heavy_minus_sign:                                                                              | The details of the connect session created with token and auth link                             |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |