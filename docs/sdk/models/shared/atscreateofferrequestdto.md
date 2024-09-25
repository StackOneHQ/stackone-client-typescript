# AtsCreateOfferRequestDto

## Example Usage

```typescript
import { AtsCreateOfferRequestDto, AtsCreateOfferRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateOfferRequestDto = {
  offerHistory: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
  offerStatus: {
    sourceValue: "Pending",
    value: AtsCreateOfferRequestDtoValue.Pending,
  },
  passthrough: {
    "other_known_names": "John Doe",
  },
  startDate: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `offerHistory`                                                                                | [shared.OfferHistory](../../../sdk/models/shared/offerhistory.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `offerStatus`                                                                                 | [shared.OfferStatus](../../../sdk/models/shared/offerstatus.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `passthrough`                                                                                 | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Value to pass through to the provider                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                   |
| `salary`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |