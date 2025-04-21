# StackoneCreateConnectSessionResponse

## Example Usage

```typescript
import { StackoneCreateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectSessionTokenAuthLinkCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneCreateConnectSessionResponse = {
  connectSessionTokenAuthLink: {
    authLinkUrl: "https://well-to-do-slipper.info",
    categories: [
      ConnectSessionTokenAuthLinkCategories.Ats,
      ConnectSessionTokenAuthLinkCategories.Hris,
      ConnectSessionTokenAuthLinkCategories.Messaging,
      ConnectSessionTokenAuthLinkCategories.Crm,
      ConnectSessionTokenAuthLinkCategories.Iam,
      ConnectSessionTokenAuthLinkCategories.Marketing,
      ConnectSessionTokenAuthLinkCategories.Lms,
      ConnectSessionTokenAuthLinkCategories.Screening,
      ConnectSessionTokenAuthLinkCategories.Documents,
      ConnectSessionTokenAuthLinkCategories.Ticketing,
      ConnectSessionTokenAuthLinkCategories.Screening,
      ConnectSessionTokenAuthLinkCategories.Messaging,
    ],
    createdAt: new Date("2023-12-03T04:42:35.999Z"),
    externalTriggerToken: "f0bc3d88-2178-5423-8c81-b81d6c9da824",
    id: 8180.31,
    organizationId: 5531.73,
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
  statusCode: 101,
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