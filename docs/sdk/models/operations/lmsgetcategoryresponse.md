# LmsGetCategoryResponse

## Example Usage

```typescript
import { LmsGetCategoryResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetCategoryResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  statusCode: 919080,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `categoryResult`                                                      | [shared.CategoryResult](../../../sdk/models/shared/categoryresult.md) | :heavy_minus_sign:                                                    | The category with the given identifier was retrieved.                 |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |