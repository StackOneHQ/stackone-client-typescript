# CrmListListsResponse

## Example Usage

```typescript
import { CrmListListsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ListValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CrmListListsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  listsPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        items: [
          {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {
          sourceValue: "Contacts",
          value: ListValue.Contacts,
        },
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `listsPaginated`                                                      | [shared.ListsPaginated](../../../sdk/models/shared/listspaginated.md) | :heavy_minus_sign:                                                    | The collection of lists was retrieved.                                |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |