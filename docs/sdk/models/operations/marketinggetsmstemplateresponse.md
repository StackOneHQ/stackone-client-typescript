# MarketingGetSmsTemplateResponse

## Example Usage

```typescript
import { MarketingGetSmsTemplateResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingGetSmsTemplateResponse = {
  contentType: "<value>",
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  templateResult: {
    data: {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2021-01-01T00:00:00.000Z"),
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `templateResult`                                                      | [shared.TemplateResult](../../../sdk/models/shared/templateresult.md) | :heavy_minus_sign:                                                    | The SMS template with the given identifier was retrieved.             |