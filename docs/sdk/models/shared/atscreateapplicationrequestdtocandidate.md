# AtsCreateApplicationRequestDtoCandidate

Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application.

## Example Usage

```typescript
import { AtsCreateApplicationRequestDtoCandidate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateApplicationRequestDtoCandidate = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `company`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate company                                                                             | Company Inc.                                                                                  |
| `country`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate country                                                                             | United States                                                                                 |
| `customFields`                                                                                | [shared.CandidateCustomFields](../../../sdk/models/shared/candidatecustomfields.md)[]         | :heavy_minus_sign:                                                                            | The candidate custom fields                                                                   |                                                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate email                                                                               | sestier.romain123@gmail.com                                                                   |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate first name                                                                          | Romain                                                                                        |
| `hiredAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Candidate hired date                                                                          | 2021-01-01T01:01:01.000Z                                                                      |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate last name                                                                           | Sestier                                                                                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate name                                                                                | Romain Sestier                                                                                |
| `passthrough`                                                                                 | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Value to pass through to the provider                                                         | {"other_known_names": "John Doe"}                                                             |
| `phoneNumber`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The candidate personal phone number                                                           | +1234567890                                                                                   |
| `socialLinks`                                                                                 | [shared.SocialLink](../../../sdk/models/shared/sociallink.md)[]                               | :heavy_minus_sign:                                                                            | List of candidate social links                                                                |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate title                                                                               | Software Engineer                                                                             |