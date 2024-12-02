# HrisGetEmployeeDocumentCategoryResponse

## Example Usage

```typescript
import { HrisGetEmployeeDocumentCategoryResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeDocumentCategoryResponse = {
  contentType: "<value>",
  referenceResult: {
    data: {
      active: true,
      id: "1687-3",
      name: "1687-4",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  },
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `referenceResult`                                                       | [shared.ReferenceResult](../../../sdk/models/shared/referenceresult.md) | :heavy_minus_sign:                                                      | The employee document category with the given identifier was retrieved. |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |