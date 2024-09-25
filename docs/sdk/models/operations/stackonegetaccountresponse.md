# StackoneGetAccountResponse

## Example Usage

```typescript
import { StackoneGetAccountResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetAccountResponse = {
  contentType: "<value>",
  statusCode: 415,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `linkedAccount`                                                       | [shared.LinkedAccount](../../../sdk/models/shared/linkedaccount.md)   | :heavy_minus_sign:                                                    | The account with the given identifier was retrieved.                  |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |