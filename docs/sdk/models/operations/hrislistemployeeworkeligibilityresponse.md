# HrisListEmployeeWorkEligibilityResponse

## Example Usage

```typescript
import { HrisListEmployeeWorkEligibilityResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeWorkEligibilityResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 989320,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `workEligibilityPaginated`                                                                | [shared.WorkEligibilityPaginated](../../../sdk/models/shared/workeligibilitypaginated.md) | :heavy_minus_sign:                                                                        | The work eligibility of the employee with the given identifier were retrieved.            |