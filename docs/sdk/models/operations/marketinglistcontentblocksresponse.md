# MarketingListContentBlocksResponse

## Example Usage

```typescript
import { MarketingListContentBlocksResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingListContentBlocksResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentBlocksPaginated`                                                              | [shared.ContentBlocksPaginated](../../../sdk/models/shared/contentblockspaginated.md) | :heavy_minus_sign:                                                                    | The list of Content Blocks was retrieved.                                             |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |