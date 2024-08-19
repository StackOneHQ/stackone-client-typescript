# MarketingCreateContentBlocksRequestDto

## Example Usage

```typescript
import { MarketingCreateContentBlocksRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateContentBlocksRequestDto = {
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
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `content`                             | *string*                              | :heavy_minus_sign:                    | N/A                                   |                                       |
| `name`                                | *string*                              | :heavy_minus_sign:                    | N/A                                   |                                       |
| `passthrough`                         | Record<string, *any*>                 | :heavy_minus_sign:                    | Value to pass through to the provider | {"other_known_names": "John Doe"}     |
| `tags`                                | *string*[]                            | :heavy_minus_sign:                    | N/A                                   |                                       |