# Offer

## Example Usage

```typescript
import { Offer, OfferValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Offer = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `offerHistory`                                                                                | [shared.OfferHistory](../../../sdk/models/shared/offerhistory.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `offerStatus`                                                                                 | [shared.OfferOfferStatus](../../../sdk/models/shared/offerofferstatus.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteApplicationId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the application                                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `salary`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of last update                                                                           | 2021-01-01T01:01:01.000Z                                                                      |