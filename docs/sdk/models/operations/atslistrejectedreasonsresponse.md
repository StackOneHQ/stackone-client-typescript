# AtsListRejectedReasonsResponse

## Example Usage

```typescript
import { AtsListRejectedReasonsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListRejectedReasonsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 80040,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `rejectedReasonsPaginated`                                                                | [shared.RejectedReasonsPaginated](../../../sdk/models/shared/rejectedreasonspaginated.md) | :heavy_minus_sign:                                                                        | The list of rejected reasons was retrieved.                                               |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |