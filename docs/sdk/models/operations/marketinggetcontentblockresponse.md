# MarketingGetContentBlockResponse

## Example Usage

```typescript
import { MarketingGetContentBlockResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ContentBlockSchemasValue, ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingGetContentBlockResponse = {
  contentBlockResult: {
    data: {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      status: {
        sourceValue: "active",
        value: ContentBlockValue.Live,
      },
      type: {
        sourceValue: "text",
        value: ContentBlockSchemasValue.Html,
      },
      updatedAt: new Date("2021-01-01T00:00:00.000Z"),
    },
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 507,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
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