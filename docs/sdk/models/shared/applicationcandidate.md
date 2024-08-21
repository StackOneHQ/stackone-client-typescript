# ApplicationCandidate

## Example Usage

```typescript
import { ApplicationCandidate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationCandidate = {
    company: "Company Inc.",
    email: "john.doe@example.com",
    emails: [
        {
            type: "personal",
            value: "sestier.romain123@gmail.com",
        },
    ],
    firstName: "John",
    lastName: "Doe",
    name: "Romain Sestier",
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

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `company`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Candidate company                                                               | Company Inc.                                                                    |
| `email`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | Email of the candidate                                                          | john.doe@example.com                                                            |
| `emails`                                                                        | [shared.CandidateEmail](../../../sdk/models/shared/candidateemail.md)[]         | :heavy_minus_sign:                                                              | List of candidate emails                                                        |                                                                                 |
| `firstName`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | First name of the candidate                                                     | John                                                                            |
| `lastName`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | Last name of the candidate                                                      | Doe                                                                             |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Candidate name                                                                  | Romain Sestier                                                                  |
| `phoneNumbers`                                                                  | [shared.PhoneNumber](../../../sdk/models/shared/phonenumber.md)[]               | :heavy_minus_sign:                                                              | List of candidate phone numbers including the type of the number when available |                                                                                 |
| `socialLinks`                                                                   | [shared.SocialLink](../../../sdk/models/shared/sociallink.md)[]                 | :heavy_minus_sign:                                                              | List of candidate social links                                                  |                                                                                 |
| `title`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | Candidate title                                                                 | Software Engineer                                                               |