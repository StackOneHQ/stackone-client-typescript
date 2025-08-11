# ScreeningOrderCandidate

## Example Usage

```typescript
import { ScreeningOrderCandidate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningOrderCandidate = {
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `email`              | *string*             | :heavy_minus_sign:   | Candidate email      | john.doe@example.com |
| `firstName`          | *string*             | :heavy_minus_sign:   | Candidate first name | John                 |
| `lastName`           | *string*             | :heavy_minus_sign:   | Candidate last name  | Doe                  |