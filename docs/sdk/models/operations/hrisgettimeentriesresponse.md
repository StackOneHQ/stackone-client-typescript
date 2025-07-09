# HrisGetTimeEntriesResponse

## Example Usage

```typescript
import { HrisGetTimeEntriesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetTimeEntriesResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 31462,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `timeEntriesResult`                                                         | [shared.TimeEntriesResult](../../../sdk/models/shared/timeentriesresult.md) | :heavy_minus_sign:                                                          | The time entry with the given identifier was retrieved.                     |