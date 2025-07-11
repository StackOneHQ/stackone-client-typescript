# AtsGetApplicationDocumentResponse

## Example Usage

```typescript
import { AtsGetApplicationDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetApplicationDocumentResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  statusCode: 328461,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `atsDocumentResult`                                                               | [shared.AtsDocumentResult](../../../sdk/models/shared/atsdocumentresult.md)       | :heavy_minus_sign:                                                                | The document related to the application with the given identifiers was retrieved. |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |