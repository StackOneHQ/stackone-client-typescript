# AtsListApplicationDocumentCategoriesResponse

## Example Usage

```typescript
import { AtsListApplicationDocumentCategoriesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationDocumentCategoriesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 902650,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `referencePaginated`                                                          | [shared.ReferencePaginated](../../../sdk/models/shared/referencepaginated.md) | :heavy_minus_sign:                                                            | The list of application document categories were retrieved.                   |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |