# AtsListLocationsResponse

## Example Usage

```typescript
import { AtsListLocationsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListLocationsResponse = {
    atsLocationsPaginated: {
        data: [
            {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            },
        ],
    },
    contentType: "<value>",
    statusCode: 18789,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `atsLocationsPaginated`                                                             | [shared.ATSLocationsPaginated](../../../sdk/models/shared/atslocationspaginated.md) | :heavy_minus_sign:                                                                  | The list of locations was retrieved.                                                |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |