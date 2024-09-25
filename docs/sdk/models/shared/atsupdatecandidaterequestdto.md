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
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Training Completion Status",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
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
    "other_known_names": "John Doe",
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
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
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
| `passthrough`                                                                                                                                   | Record<string, *any*>                                                                                                                           | :heavy_minus_sign:                                                                                                                              | Value to pass through to the provider                                                                                                           | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                     |
| ~~`phone`~~                                                                                                                                     | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Candidate phone number | +16178294093                                                                                                                                    |
| `phoneNumbers`                                                                                                                                  | [shared.PhoneNumber](../../../sdk/models/shared/phonenumber.md)[]                                                                               | :heavy_minus_sign:                                                                                                                              | List of candidate phone numbers including the type of the number when available                                                                 |                                                                                                                                                 |
| `socialLinks`                                                                                                                                   | [shared.SocialLink](../../../sdk/models/shared/sociallink.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                              | List of candidate social links                                                                                                                  |                                                                                                                                                 |
| `title`                                                                                                                                         | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Candidate title                                                                                                                                 | Software Engineer                                                                                                                               |
| `unifiedCustomFields`                                                                                                                           | Record<string, *any*>                                                                                                                           | :heavy_minus_sign:                                                                                                                              | Custom Unified Fields configured in your StackOne project                                                                                       | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                        |