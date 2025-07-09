# AtsUploadApplicationDocumentResponse

## Example Usage

```typescript
import { AtsUploadApplicationDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUploadApplicationDocumentResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 859665,
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