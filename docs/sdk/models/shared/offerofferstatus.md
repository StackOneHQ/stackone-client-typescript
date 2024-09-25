# OfferOfferStatus

## Example Usage

```typescript
import { OfferOfferStatus, OfferValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OfferOfferStatus = {
  sourceValue: "Pending",
  value: OfferValue.Pending,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `sourceValue`                                                 | *shared.OfferSourceValue*                                     | :heavy_minus_sign:                                            | The source value of the offer status.                         | Pending                                                       |
| `value`                                                       | [shared.OfferValue](../../../sdk/models/shared/offervalue.md) | :heavy_minus_sign:                                            | The status of the offer.                                      | pending                                                       |