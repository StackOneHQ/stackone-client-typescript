# MessagingConversation

## Example Usage

```typescript
import { MessagingConversation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingConversation = {
  createdAt: new Date("2024-03-20T10:00:00Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  lastMessageAt: new Date("2024-03-20T11:30:00Z"),
  name: "Project Discussion",
  participants: [
    "c28xIQ1",
    "c28xIQ2",
  ],
  private: true,
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the conversation was created                                                   | 2024-03-20T10:00:00Z                                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `lastMessageAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the last message in the conversation                                             | 2024-03-20T11:30:00Z                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name or title of the conversation                                                             | Project Discussion                                                                            |
| `participants`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of participant user IDs in the conversation                                              | [<br/>"c28xIQ1",<br/>"c28xIQ2"<br/>]                                                          |
| `private`                                                                                     | *shared.Private*                                                                              | :heavy_minus_sign:                                                                            | Whether the conversation is private                                                           | true                                                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |