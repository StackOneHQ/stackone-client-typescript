# OfferHistory

## Example Usage

```typescript
import { OfferHistory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OfferHistory = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  startDate: new Date("2021-01-01T01:01:01.000Z"),
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `salary`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start Date of the offer                                                                       | 2021-01-01T01:01:01.000Z                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of last update                                                                           | 2021-01-01T01:01:01.000Z                                                                      |