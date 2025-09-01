# AtsDownloadApplicationDocumentResponse

## Example Usage

```typescript
import { AtsDownloadApplicationDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsDownloadApplicationDocumentResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  statusCode: 210797,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `body`                                                                            | *Uint8Array*                                                                      | :heavy_minus_sign:                                                                | N/A                                                                               |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `downloadApiModel`                                                                | [shared.DownloadApiModel](../../../sdk/models/shared/downloadapimodel.md)         | :heavy_minus_sign:                                                                | The document related to the application with the given identifiers was retrieved. |
| `downloadApiModel1`                                                               | *string*                                                                          | :heavy_minus_sign:                                                                | The document related to the application with the given identifiers was retrieved. |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |