# OffersPaginated

## Example Usage

```typescript
import { OffersPaginated, OfferValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OffersPaginated = {
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.Offer](../../../sdk/models/shared/offer.md)[]                                                                   | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |