# AtsListApplicationsOffersResponse

## Example Usage

```typescript
import { AtsListApplicationsOffersResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationsOffersResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `offersPaginated`                                                               | [shared.OffersPaginated](../../../sdk/models/shared/offerspaginated.md)         | :heavy_minus_sign:                                                              | The offers related to the application with the given identifier were retrieved. |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |