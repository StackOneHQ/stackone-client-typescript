# HrisListCompaniesGroupsResponse

## Example Usage

```typescript
import { HrisListCompaniesGroupsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListCompaniesGroupsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  statusCode: 836174,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `companiesPaginated`                                                          | [shared.CompaniesPaginated](../../../sdk/models/shared/companiespaginated.md) | :heavy_minus_sign:                                                            | The list of companies groups was retrieved.                                   |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |