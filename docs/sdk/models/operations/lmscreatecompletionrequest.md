# LmsCreateCompletionRequest

## Example Usage

```typescript
import { LmsCreateCompletionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsCreateCompletionRequest = {
    lmsCreateCompletionRequestDto: {
        completedAt: "2021-07-21T14:00:00.000Z",
        contentId: "16873-ENG-VIDEO-1",
        externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `lmsCreateCompletionRequestDto`                                                                     | [shared.LmsCreateCompletionRequestDto](../../../sdk/models/shared/lmscreatecompletionrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |