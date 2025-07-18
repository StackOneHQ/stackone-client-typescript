# IamListGroupsResponse

## Example Usage

```typescript
import { IamListGroupsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamListGroupsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 575785,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `iamGroupsPaginated`                                                          | [shared.IamGroupsPaginated](../../../sdk/models/shared/iamgroupspaginated.md) | :heavy_minus_sign:                                                            | The list of groups was retrieved.                                             |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |