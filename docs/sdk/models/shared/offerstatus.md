# OfferStatus

## Example Usage

```typescript
import { AtsCreateOfferRequestDtoValue, OfferStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OfferStatus = {
  sourceValue: "Pending",
  value: AtsCreateOfferRequestDtoValue.Pending,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                       | *shared.AtsCreateOfferRequestDtoSourceValue*                                                        | :heavy_minus_sign:                                                                                  | The source value of the offer status.                                                               | Pending                                                                                             |
| `value`                                                                                             | [shared.AtsCreateOfferRequestDtoValue](../../../sdk/models/shared/atscreateofferrequestdtovalue.md) | :heavy_minus_sign:                                                                                  | The status of the offer.                                                                            | pending                                                                                             |