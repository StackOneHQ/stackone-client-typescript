# MessagingConversationsPaginated

## Example Usage

```typescript
import { MessagingConversationsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingConversationsPaginated = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.MessagingConversation](../../../sdk/models/shared/messagingconversation.md)[] | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `next`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `raw`                                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                     | :heavy_minus_sign:                                                                    | N/A                                                                                   |