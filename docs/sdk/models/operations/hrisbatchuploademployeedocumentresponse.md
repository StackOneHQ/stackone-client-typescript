# HrisBatchUploadEmployeeDocumentResponse

## Example Usage

```typescript
import { HrisBatchUploadEmployeeDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisBatchUploadEmployeeDocumentResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 927943,
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