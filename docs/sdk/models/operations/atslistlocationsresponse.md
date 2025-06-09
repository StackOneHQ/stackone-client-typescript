# AtsListLocationsResponse

## Example Usage

```typescript
import { AtsListLocationsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListLocationsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `atsLocationsPaginated`                                                             | [shared.ATSLocationsPaginated](../../../sdk/models/shared/atslocationspaginated.md) | :heavy_minus_sign:                                                                  | The list of locations was retrieved.                                                |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |