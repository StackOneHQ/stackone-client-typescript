# AtsUploadApplicationDocumentResponse

## Example Usage

```typescript
import { AtsUploadApplicationDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUploadApplicationDocumentResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 408,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  writeResultApiModel: {
    message: "Employee created successfully",
    providerErrors: [
      {
        headers: {},
        raw: {},
        status: 400,
        url: "https://api.someprovider.com/v1/endpoint",
      },
    ],
    statusCode: 201,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
    unifiedWarnings: [
      {
        message:
          "The provided field type is not supported in the current model.",
      },
    ],
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `writeResultApiModel`                                                           | [shared.WriteResultApiModel](../../../sdk/models/shared/writeresultapimodel.md) | :heavy_minus_sign:                                                              | The document related to the application with the given identifier was uploaded. |