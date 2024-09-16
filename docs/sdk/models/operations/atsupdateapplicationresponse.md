# AtsUpdateApplicationResponse

## Example Usage

```typescript
import { AtsUpdateApplicationResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateApplicationResponse = {
  contentType: "<value>",
  statusCode: 918236,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  updateResult: {
    message: "Record updated successfully.",
    statusCode: 200,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `updateResult`                                                        | [shared.UpdateResult](../../../sdk/models/shared/updateresult.md)     | :heavy_minus_sign:                                                    | Record updated successfully.                                          |