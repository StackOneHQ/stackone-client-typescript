# BackgroundCheckOrderCandidate

## Example Usage

```typescript
import { BackgroundCheckOrderCandidate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderCandidate = {
  emails: [
    {
      type: "personal",
      value: "sestier.romain123@gmail.com",
    },
  ],
  firstName: "Romain",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  lastName: "Sestier",
  passthrough: {
    "other_known_names": "John Doe",
  },
  profileUrl: "https://exmaple.com/candidate?id=xyz",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `emails`                                                                | [shared.CandidateEmail](../../../sdk/models/shared/candidateemail.md)[] | :heavy_minus_sign:                                                      | List of candidate emails                                                |                                                                         |
| `firstName`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Candidate first name                                                    | Romain                                                                  |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                    |
| `lastName`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Candidate last name                                                     | Sestier                                                                 |
| `passthrough`                                                           | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Value to pass through to the provider                                   | {<br/>"other_known_names": "John Doe"<br/>}                             |
| `profileUrl`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Candidate profile url                                                   | https://exmaple.com/candidate?id=xyz                                    |
| `remoteId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Provider's unique identifier                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                    |