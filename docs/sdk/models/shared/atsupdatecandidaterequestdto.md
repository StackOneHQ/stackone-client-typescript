# AtsUpdateCandidateRequestDto

## Example Usage

```typescript
import { AtsUpdateCandidateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateCandidateRequestDto = {
    applicationIds: [
        "123e4567-e89b-12d3-a456-426614174000",
        "523e1234-e89b-fdd2-a456-762545121101",
    ],
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
    emails: [
        {
            type: "personal",
            value: "sestier.romain123@gmail.com",
        },
    ],
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
    phoneNumbers: [
        {
            phone: "+447700112233",
        },
    ],
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

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationIds`                                                                                                                                | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | List of candidate application IDs                                                                                                               | [<br/>"123e4567-e89b-12d3-a456-426614174000",<br/>"523e1234-e89b-fdd2-a456-762545121101"<br/>]                                                  |
| `company`                                                                                                                                       | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate company                                                                                                                               | Company Inc.                                                                                                                                    |
| `country`                                                                                                                                       | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate country                                                                                                                               | United States                                                                                                                                   |
| `customFields`                                                                                                                                  | [shared.CandidateCustomFields](../../../sdk/models/shared/candidatecustomfields.md)[]                                                           | :heavy_minus_sign:                                                                                                                              | The candidate custom fields                                                                                                                     |                                                                                                                                                 |
| `email`                                                                                                                                         | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate email                                                                                                                                 | sestier.romain123@gmail.com                                                                                                                     |
| `emails`                                                                                                                                        | [shared.CandidateEmail](../../../sdk/models/shared/candidateemail.md)[]                                                                         | :heavy_minus_sign:                                                                                                                              | List of candidate emails                                                                                                                        |                                                                                                                                                 |
| `firstName`                                                                                                                                     | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate first name                                                                                                                            | Romain                                                                                                                                          |
| `hiredAt`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                   | :heavy_minus_sign:                                                                                                                              | Candidate hired date                                                                                                                            | 2021-01-01T01:01:01.000Z                                                                                                                        |
| `lastName`                                                                                                                                      | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate last name                                                                                                                             | Sestier                                                                                                                                         |
| `name`                                                                                                                                          | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate name                                                                                                                                  | Romain Sestier                                                                                                                                  |
| `passthrough`                                                                                                                                   | Record<string, *any*>                                                                                                                           | :heavy_minus_sign:                                                                                                                              | Value to pass through to the provider                                                                                                           | {"other_known_names": "John Doe"}                                                                                                               |
| ~~`phone`~~                                                                                                                                     | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Candidate phone number | +16178294093                                                                                                                                    |
| `phoneNumbers`                                                                                                                                  | [shared.PhoneNumber](../../../sdk/models/shared/phonenumber.md)[]                                                                               | :heavy_minus_sign:                                                                                                                              | List of candidate phone numbers including the type of the number when available                                                                 |                                                                                                                                                 |
| `socialLinks`                                                                                                                                   | [shared.SocialLink](../../../sdk/models/shared/sociallink.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                              | List of candidate social links                                                                                                                  |                                                                                                                                                 |
| `title`                                                                                                                                         | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate title                                                                                                                                 | Software Engineer                                                                                                                               |