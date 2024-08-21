# CandidateEmail

## Example Usage

```typescript
import { CandidateEmail } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CandidateEmail = {
    type: "personal",
    value: "sestier.romain123@gmail.com",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `type`                      | *string*                    | :heavy_minus_sign:          | Type of the email           | personal                    |
| `value`                     | *string*                    | :heavy_minus_sign:          | Email value                 | sestier.romain123@gmail.com |