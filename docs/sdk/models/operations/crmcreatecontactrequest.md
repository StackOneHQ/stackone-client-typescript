# CrmCreateContactRequest

## Example Usage

```typescript
import { CrmCreateContactRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmCreateContactRequest = {
    crmCreateContactRequestDto: {
        accountIds: ["account-123", "account-456"],
        companyName: "Apple Inc.",
        dealIds: ["deal-001", "deal-002"],
        emails: ["steve@apple.com"],
        firstName: "Steve",
        lastName: "Wozniak",
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
        phoneNumbers: ["123-456-7890"],
    },
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `crmCreateContactRequestDto`                                                                  | [shared.CrmCreateContactRequestDto](../../../sdk/models/shared/crmcreatecontactrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |