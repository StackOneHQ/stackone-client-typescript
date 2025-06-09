# HrisListTimeEntriesResponse

## Example Usage

```typescript
import { HrisListTimeEntriesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeEntriesResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `timeEntriesPaginated`                                                            | [shared.TimeEntriesPaginated](../../../sdk/models/shared/timeentriespaginated.md) | :heavy_minus_sign:                                                                | The list of time entries was retrieved.                                           |