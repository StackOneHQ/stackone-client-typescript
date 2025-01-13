# LmsBatchUpsertContentResponse

## Example Usage

```typescript
import { LmsBatchUpsertContentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsBatchUpsertContentResponse = {
  batchResultApiModel: {
    errors: [
      [
        "Missing field: name",
      ],
      [
        "<value>",
      ],
      [
        "<value>",
      ],
    ],
    message: "Batch operation accepted",
    statusCode: 202,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `batchResultApiModel`                                                           | [shared.BatchResultApiModel](../../../sdk/models/shared/batchresultapimodel.md) | :heavy_minus_sign:                                                              | Batch operation accepted                                                        |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |