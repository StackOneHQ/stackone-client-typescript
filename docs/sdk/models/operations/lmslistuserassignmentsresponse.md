# LmsListUserAssignmentsResponse

## Example Usage

```typescript
import { LmsListUserAssignmentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListUserAssignmentsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 221224,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `assignmentsPaginated`                                                            | [shared.AssignmentsPaginated](../../../sdk/models/shared/assignmentspaginated.md) | :heavy_minus_sign:                                                                | The assignments related to the employee with the given identifier were retrieved. |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |