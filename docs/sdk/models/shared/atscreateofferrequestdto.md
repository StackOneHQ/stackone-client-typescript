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
        "0": "{",
        "1": '"',
        "2": "o",
        "3": "t",
        "4": "h",
        "5": "e",
        "6": "r",
        "7": "_",
        "8": "k",
        "9": "n",
        "10": "o",
        "11": "w",
        "12": "n",
        "13": "_",
        "14": "n",
        "15": "a",
        "16": "m",
        "17": "e",
        "18": "s",
        "19": '"',
        "20": ":",
        "21": " ",
        "22": '"',
        "23": "J",
        "24": "o",
        "25": "h",
        "26": "n",
        "27": " ",
        "28": "D",
        "29": "o",
        "30": "e",
        "31": '"',
        "32": "}",
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
| `passthrough`                                                                                 | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Value to pass through to the provider                                                         | {"other_known_names": "John Doe"}                                                             |
| `salary`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |