# AssessmentResultCandidate

## Example Usage

```typescript
import { AssessmentResultCandidate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentResultCandidate = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  profileUrl: "https://exmaple.com/candidate?id=xyz",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Unique identifier                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
| `profileUrl`                         | *string*                             | :heavy_minus_sign:                   | Candidate profile url                | https://exmaple.com/candidate?id=xyz |
| `remoteId`                           | *string*                             | :heavy_minus_sign:                   | Provider's unique identifier         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |