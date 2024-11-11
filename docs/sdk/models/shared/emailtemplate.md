# EmailTemplate

## Example Usage

```typescript
import { EmailMessagesValue, EmailTemplate } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmailTemplate = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  messages: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      messageType: {
        sourceValue: "Email",
        value: EmailMessagesValue.Email,
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Unique identifier                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `messages`                                                            | [shared.EmailMessages](../../../sdk/models/shared/emailmessages.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `remoteId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | Provider's unique identifier                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `tags`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |