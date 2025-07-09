# MarketingGetContentBlockResponse

## Example Usage

```typescript
import { MarketingGetContentBlockResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingGetContentBlockResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [],
  },
  statusCode: 138946,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentBlockResult`                                                          | [shared.ContentBlockResult](../../../sdk/models/shared/contentblockresult.md) | :heavy_minus_sign:                                                            | The Content Block with the given identifier was retrieved                     |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |