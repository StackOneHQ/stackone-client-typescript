# HrisGetEmployeeDocumentResponse

## Example Usage

```typescript
import { HrisGetEmployeeDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeDocumentResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 968021,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `hrisDocumentResult`                                                           | [shared.HrisDocumentResult](../../../sdk/models/shared/hrisdocumentresult.md)  | :heavy_minus_sign:                                                             | The document related to the employee with the given identifiers was retrieved. |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_check_mark:                                                             | Raw HTTP response; suitable for custom response parsing                        |