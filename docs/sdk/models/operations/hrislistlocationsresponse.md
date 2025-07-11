# HrisListLocationsResponse

## Example Usage

```typescript
import { HrisListLocationsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListLocationsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 937790,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `hrisLocationsPaginated`                                                              | [shared.HRISLocationsPaginated](../../../sdk/models/shared/hrislocationspaginated.md) | :heavy_minus_sign:                                                                    | The list of work locations was retrieved.                                             |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |