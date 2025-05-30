# AtsListRejectedReasonsResponse

## Example Usage

```typescript
import { AtsListRejectedReasonsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsListRejectedReasonsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  rejectedReasonsPaginated: {
    data: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        label: "Failed Phone Screen",
        rejectedReasonType: {
          sourceValue: "RejectedByOrg",
          value: RejectedReasonValue.RejectedByOrganization,
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
      },
    ],
  },
  statusCode: 417,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `rejectedReasonsPaginated`                                                                | [shared.RejectedReasonsPaginated](../../../sdk/models/shared/rejectedreasonspaginated.md) | :heavy_minus_sign:                                                                        | The list of rejected reasons was retrieved.                                               |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |