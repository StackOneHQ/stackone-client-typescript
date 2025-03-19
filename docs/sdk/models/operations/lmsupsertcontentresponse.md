# LmsUpsertContentResponse

## Example Usage

```typescript
import { LmsUpsertContentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsUpsertContentResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 411,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  upsertResult: {
    data: {
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    message: "Record created successfully.",
    statusCode: 201,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `upsertResult`                                                        | [shared.UpsertResult](../../../sdk/models/shared/upsertresult.md)     | :heavy_minus_sign:                                                    | The content was upserted successfully.                                |