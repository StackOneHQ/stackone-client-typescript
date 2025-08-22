# AtsListJobsResponse

## Example Usage

```typescript
import { AtsListJobsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListJobsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 89865,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `atsJobsPaginated`                                                        | [shared.AtsJobsPaginated](../../../sdk/models/shared/atsjobspaginated.md) | :heavy_minus_sign:                                                        | The list of jobs was retrieved.                                           |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |