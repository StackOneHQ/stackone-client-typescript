# MessagingUsersPaginated

## Example Usage

```typescript
import { MessagingUsersPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingUsersPaginated = {
  data: [
    {
      active: true,
      bot: false,
      email: "john.doe@example.com",
      firstName: "John",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      lastName: "Doe",
      name: "John Doe",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      username: "johndoe",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.MessagingUser](../../../sdk/models/shared/messaginguser.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `raw`                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]     | :heavy_minus_sign:                                                    | N/A                                                                   |