# LmsGetUserAssignmentResponse

## Example Usage

```typescript
import { LmsGetUserAssignmentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetUserAssignmentResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `assignmentResult`                                                        | [shared.AssignmentResult](../../../sdk/models/shared/assignmentresult.md) | :heavy_minus_sign:                                                        | The assignment with the given identifier was retrieved.                   |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |