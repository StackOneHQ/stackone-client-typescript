# AssessmentsRequestsJobHiringTeamApiModel

## Example Usage

```typescript
import { AssessmentsRequestsJobHiringTeamApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsRequestsJobHiringTeamApiModel = {
  email: "john.doe@gmail.com",
  firstName: "John",
  lastName: "Doe",
  remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  role: "Software Engineer",
  userId: "123456",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `email`                                  | *string*                                 | :heavy_minus_sign:                       | Email of the hiring team member.         | john.doe@gmail.com                       |
| `firstName`                              | *string*                                 | :heavy_minus_sign:                       | First name of the hiring team member.    | John                                     |
| `lastName`                               | *string*                                 | :heavy_minus_sign:                       | Last name of the hiring team member.     | Doe                                      |
| `remoteUserId`                           | *string*                                 | :heavy_minus_sign:                       | Provider's unique identifier of the user | e3cb75bf-aa84-466e-a6c1-b8322b257a48     |
| `role`                                   | *string*                                 | :heavy_minus_sign:                       | Role of the hiring team member.          | Software Engineer                        |
| `userId`                                 | *string*                                 | :heavy_minus_sign:                       | User ID of the hiring team member.       | 123456                                   |