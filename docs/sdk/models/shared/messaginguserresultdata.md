# MessagingUserResultData

## Example Usage

```typescript
import { MessagingUserResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingUserResultData = {
  active: true,
  bot: false,
  email: "john.doe@example.com",
  firstName: "John",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  lastName: "Doe",
  name: "John Doe",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  username: "johndoe",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `active`                             | *shared.MessagingUserResultActive*   | :heavy_minus_sign:                   | Whether the user is active           | true                                 |
| `bot`                                | *shared.MessagingUserResultBot*      | :heavy_minus_sign:                   | Whether the user is a bot            | false                                |
| `email`                              | *string*                             | :heavy_minus_sign:                   | Email address of the user            | john.doe@example.com                 |
| `firstName`                          | *string*                             | :heavy_minus_sign:                   | First name of the user               | John                                 |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Unique identifier                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
| `lastName`                           | *string*                             | :heavy_minus_sign:                   | Last name of the user                | Doe                                  |
| `name`                               | *string*                             | :heavy_minus_sign:                   | Full name of the user                | John Doe                             |
| `remoteId`                           | *string*                             | :heavy_minus_sign:                   | Provider's unique identifier         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
| `username`                           | *string*                             | :heavy_minus_sign:                   | Username of the user                 | johndoe                              |