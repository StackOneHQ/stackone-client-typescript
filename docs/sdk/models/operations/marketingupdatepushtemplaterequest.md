# MarketingUpdatePushTemplateRequest

## Example Usage

```typescript
import { MarketingUpdatePushTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingUpdatePushTemplateRequest = {
    marketingCreatePushTemplateRequestDto: {
        messages: [
            {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                messageType: {
                    sourceValue: "Email",
                },
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            },
        ],
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
    },
    id: "<id>",
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `marketingCreatePushTemplateRequestDto`                                                                             | [shared.MarketingCreatePushTemplateRequestDto](../../../sdk/models/shared/marketingcreatepushtemplaterequestdto.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `xAccountId`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The account identifier                                                                                              |