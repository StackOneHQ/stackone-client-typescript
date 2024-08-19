# CrmCreateContactRequestDto

## Example Usage

```typescript
import { CrmCreateContactRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CrmCreateContactRequestDto = {
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
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `accountIds`                          | *string*[]                            | :heavy_minus_sign:                    | List of associated account IDs        | [<br/>"account-123",<br/>"account-456"<br/>] |
| `companyName`                         | *string*                              | :heavy_minus_sign:                    | The contact company name              | Apple Inc.                            |
| `dealIds`                             | *string*[]                            | :heavy_minus_sign:                    | List of associated deal IDs           | [<br/>"deal-001",<br/>"deal-002"<br/>] |
| `emails`                              | *string*[]                            | :heavy_minus_sign:                    | List of contact email addresses       | [<br/>"steve@apple.com"<br/>]         |
| `firstName`                           | *string*                              | :heavy_minus_sign:                    | The contact first name                | Steve                                 |
| `lastName`                            | *string*                              | :heavy_minus_sign:                    | The contact last name                 | Wozniak                               |
| `passthrough`                         | Record<string, *any*>                 | :heavy_minus_sign:                    | Value to pass through to the provider | {"other_known_names": "John Doe"}     |
| `phoneNumbers`                        | *string*[]                            | :heavy_minus_sign:                    | List of contact phone numbers         | [<br/>"123-456-7890"<br/>]            |