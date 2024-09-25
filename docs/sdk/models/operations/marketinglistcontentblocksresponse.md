# MarketingListContentBlocksResponse

## Example Usage

```typescript
import { MarketingListContentBlocksResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ContentBlockSchemasValue, ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingListContentBlocksResponse = {
  contentBlocksPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T00:00:00.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        status: {
          sourceValue: "active",
          value: ContentBlockValue.Live,
        },
        type: {
          sourceValue: "text",
          value: ContentBlockSchemasValue.CodeSnippet,
        },
        updatedAt: new Date("2021-01-01T00:00:00.000Z"),
      },
    ],
  },
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentBlocksPaginated`                                                              | [shared.ContentBlocksPaginated](../../../sdk/models/shared/contentblockspaginated.md) | :heavy_minus_sign:                                                                    | The list of Content Blocks was retrieved.                                             |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |