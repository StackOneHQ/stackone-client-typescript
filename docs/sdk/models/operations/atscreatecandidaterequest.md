# AtsCreateCandidateRequest

## Example Usage

```typescript
import { AtsCreateCandidateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsCreateCandidateRequest = {
    atsCreateCandidateRequestDto: {
        company: "Company Inc.",
        country: "United States",
        customFields: [
            {
                description: "The completion status of the employee's training.",
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                name: "Training Completion Status",
                options: ["Not Started", "In Progress", "Completed", "Overdue"],
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
                type: {},
                value: "Completed",
                valueId: "value_456",
            },
        ],
        email: "sestier.romain123@gmail.com",
        firstName: "Romain",
        hiredAt: new Date("2021-01-01T01:01:01.000Z"),
        lastName: "Sestier",
        name: "Romain Sestier",
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
        phoneNumber: "+1234567890",
        socialLinks: [
            {
                type: "linkedin",
                url: "https://www.linkedin.com/in/romainsestier/",
            },
        ],
        title: "Software Engineer",
    },
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `atsCreateCandidateRequestDto`                                                                    | [shared.AtsCreateCandidateRequestDto](../../../sdk/models/shared/atscreatecandidaterequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |