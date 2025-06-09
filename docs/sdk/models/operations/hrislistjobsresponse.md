# HrisListJobsResponse

## Example Usage

```typescript
import { HrisListJobsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListJobsResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `jobsPaginated`                                                       | [shared.JobsPaginated](../../../sdk/models/shared/jobspaginated.md)   | :heavy_minus_sign:                                                    | The list of jobs was retrieved.                                       |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |