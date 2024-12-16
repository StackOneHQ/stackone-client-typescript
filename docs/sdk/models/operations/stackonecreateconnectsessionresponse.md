# StackoneCreateConnectSessionResponse

## Example Usage

```typescript
import { StackoneCreateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectSessionTokenAuthLinkCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneCreateConnectSessionResponse = {
  connectSessionTokenAuthLink: {
    authLinkUrl: "https://spanish-sunbeam.org",
    categories: [
      ConnectSessionTokenAuthLinkCategories.Ats,
      ConnectSessionTokenAuthLinkCategories.Hris,
      ConnectSessionTokenAuthLinkCategories.Stackone,
      ConnectSessionTokenAuthLinkCategories.Crm,
      ConnectSessionTokenAuthLinkCategories.Iam,
      ConnectSessionTokenAuthLinkCategories.Marketing,
      ConnectSessionTokenAuthLinkCategories.Lms,
      ConnectSessionTokenAuthLinkCategories.Iam,
      ConnectSessionTokenAuthLinkCategories.Documents,
    ],
    createdAt: new Date("2024-05-05T11:02:22.031Z"),
    id: 1182.74,
    organizationId: 6399.21,
    originOwnerId: "<id>",
    originOwnerName: "<value>",
    projectId: "<id>",
    token: "<value>",
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 103,
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
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |