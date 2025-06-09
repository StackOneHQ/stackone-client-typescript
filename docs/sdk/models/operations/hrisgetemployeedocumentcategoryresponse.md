# HrisGetEmployeeDocumentCategoryResponse

## Example Usage

```typescript
import { HrisGetEmployeeDocumentCategoryResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeDocumentCategoryResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `referenceResult`                                                       | [shared.ReferenceResult](../../../sdk/models/shared/referenceresult.md) | :heavy_minus_sign:                                                      | The employee document category with the given identifier was retrieved. |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |