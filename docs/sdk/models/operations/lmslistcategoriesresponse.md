# LmsListCategoriesResponse

## Example Usage

```typescript
import { LmsListCategoriesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListCategoriesResponse = {
  categoriesPaginated: {
    data: [
      {
        active: true,
        id: "16873-IT345",
        name: "Information-Technology",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
      },
    ],
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `categoriesPaginated`                                                           | [shared.CategoriesPaginated](../../../sdk/models/shared/categoriespaginated.md) | :heavy_minus_sign:                                                              | The list of categories was retrieved.                                           |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |