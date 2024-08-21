# AtsCreateCandidateRequestDto

## Example Usage

```typescript
import { AtsCreateCandidateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateCandidateRequestDto = {
    company: "Company Inc.",
    country: "United States",
    customFields: [
        {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Training Completion Status",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            value: true,
            valueId: "value_456",
        },
    ],
    email: "sestier.romain123@gmail.com",
    firstName: "Romain",
    hiredAt: new Date("2021-01-01T01:01:01.000Z"),
    lastName: "Sestier",
    name: "Romain Sestier",
    passthrough: {
        other_known_names: "John Doe",
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
| `passthrough`                                                                                 | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Value to pass through to the provider                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                   |
| `phoneNumber`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The candidate personal phone number                                                           | +1234567890                                                                                   |
| `socialLinks`                                                                                 | [shared.SocialLink](../../../sdk/models/shared/sociallink.md)[]                               | :heavy_minus_sign:                                                                            | List of candidate social links                                                                |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Candidate title                                                                               | Software Engineer                                                                             |