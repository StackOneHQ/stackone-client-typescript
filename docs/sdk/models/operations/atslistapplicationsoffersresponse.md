# AtsListApplicationsOffersResponse

## Example Usage

```typescript
import { AtsListApplicationsOffersResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { OfferValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsListApplicationsOffersResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  offersPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        offerHistory: [
          {
            createdAt: new Date("2021-01-01T01:01:01.000Z"),
            startDate: new Date("2021-01-01T01:01:01.000Z"),
            updatedAt: new Date("2021-01-01T01:01:01.000Z"),
          },
        ],
        offerStatus: {
          sourceValue: "Pending",
          value: OfferValue.Pending,
        },
        remoteApplicationId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        startDate: new Date("2021-01-01T01:01:01.000Z"),
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
  statusCode: 304,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `offersPaginated`                                                               | [shared.OffersPaginated](../../../sdk/models/shared/offerspaginated.md)         | :heavy_minus_sign:                                                              | The offers related to the application with the given identifier were retrieved. |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |