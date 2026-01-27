# AtsCreateOfferRequest

## Example Usage

```typescript
import { AtsCreateOfferRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsCreateOfferRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateOfferRequest = {
  atsCreateOfferRequestDto: {
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
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsCreateOfferRequestDto`                                                                                                                                               | [shared.AtsCreateOfferRequestDto](../../../sdk/models/shared/atscreateofferrequestdto.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |