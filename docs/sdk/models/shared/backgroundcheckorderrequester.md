# BackgroundCheckOrderRequester

## Example Usage

```typescript
import { BackgroundCheckOrderRequester } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderRequester = {
  emails: [
    {
      type: "personal",
      value: "sestier.romain123@gmail.com",
    },
  ],
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `emails`                                                                | [shared.CandidateEmail](../../../sdk/models/shared/candidateemail.md)[] | :heavy_minus_sign:                                                      | List of candidate emails                                                |                                                                         |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                    |
| `passthrough`                                                           | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Value to pass through to the provider                                   | {<br/>"other_known_names": "John Doe"<br/>}                             |