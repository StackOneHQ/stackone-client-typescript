# MarketingGetOmniChannelTemplateResponse

## Example Usage

```typescript
import { MarketingGetOmniChannelTemplateResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingGetOmniChannelTemplateResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 771167,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `templateResult`                                                      | [shared.TemplateResult](../../../sdk/models/shared/templateresult.md) | :heavy_minus_sign:                                                    | The omni-channel template with the given identifier was retrieved.    |