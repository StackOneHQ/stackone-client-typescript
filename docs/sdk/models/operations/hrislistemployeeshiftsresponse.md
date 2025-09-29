# HrisListEmployeeShiftsResponse

## Example Usage

```typescript
import { HrisListEmployeeShiftsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeShiftsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 191565,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `hrisShiftsPaginated`                                                           | [shared.HrisShiftsPaginated](../../../sdk/models/shared/hrisshiftspaginated.md) | :heavy_minus_sign:                                                              | The shifts related to the employee with the given identifier were retrieved.    |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |